import {
  afterRenderEffect, ChangeDetectionStrategy, Component, computed, ElementRef,
  inject, signal, viewChild,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { RamadanService } from '../../services/ramadan.service';

@Component({
  selector: 'app-ramadan-share-card',
  imports: [],
  templateUrl: './ramadan-share-card.html',
  styleUrl: './ramadan-share-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RamadanShareCard {
  readonly lang = inject(LanguageService);
  readonly ramadan = inject(RamadanService);
  readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('cardCanvas');
  readonly file = signal<File | null>(null);
  readonly busy = signal(false);
  readonly message = signal('');
  readonly failed = signal(false);
  readonly shareUrl = 'https://alinable.space/ramadan';
  readonly days = computed(() => this.ramadan.countdown().days);
  readonly started = computed(() => this.ramadan.countdown().isStarted);
  private background?: Promise<HTMLImageElement>;

  constructor() {
    // Render only when the displayed day or language changes, not on every timer tick.
    afterRenderEffect((onCleanup) => {
      const canvas = this.canvas().nativeElement;
      const days = this.days();
      const started = this.started();
      const isRu = this.lang.currentLang() === 'RU';
      let active = true;
      onCleanup(() => { active = false; });
      this.file.set(null);
      this.failed.set(false);
      this.message.set('');
      void this.render(canvas, days, started, isRu, () => active);
    });
  }

  private loadBackground(): Promise<HTMLImageElement> {
    return this.background ??= new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Image unavailable'));
      image.src = new URL('ramadan-story-raised.png', document.baseURI).href;
    });
  }

  private async render(canvas: HTMLCanvasElement, days: number, started: boolean, isRu: boolean, active: () => boolean) {
    try {
      const image = await this.loadBackground();
      if (!active()) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas unavailable');
      canvas.width = 1080;
      canvas.height = 1920;
      const scale = Math.max(1080 / image.width, 1920 / image.height);
      ctx.drawImage(image, (1080 - image.width * scale) / 2, (1920 - image.height * scale) / 2, image.width * scale, image.height * scale);
      const shade = ctx.createLinearGradient(0, 0, 0, 1920);
      shade.addColorStop(0, 'rgba(15, 9, 28, .20)');
      shade.addColorStop(.45, 'rgba(15, 9, 28, .20)');
      shade.addColorStop(.75, 'rgba(15, 9, 28, 0)');
      shade.addColorStop(1, 'rgba(15, 9, 28, .85)');
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, 1080, 1920);
      ctx.strokeStyle = 'rgba(244, 224, 187, .45)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(48, 48, 984, 1824);
      ctx.textAlign = 'center';
      const text = (value: string, y: number, font: string, color = '#fff7eb', maxWidth = 880) => {
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.fillText(value, 540, y, maxWidth);
      };
      text(isRu ? 'В ОЖИДАНИИ СВЯЩЕННОГО МЕСЯЦА' : 'AWAITING THE HOLY MONTH', 350, '24px Arial', '#eed6b3');
      text(isRu ? 'Рамадан' : 'Ramadan', 470, 'italic 104px Georgia');
      text('1448 / 2027', 525, '24px Arial', '#eed6b3');
      if (started) {
        text(isRu ? 'Рамадан наступил' : 'Ramadan is here', 725, '64px Georgia');
      } else if (days === 0) {
        text(isRu ? 'Меньше дня' : 'Less than a day', 725, '68px Georgia');
        text(isRu ? 'до Рамадана' : 'until Ramadan', 795, '30px Arial');
      } else {
        text(String(days), 765, '200px Georgia');
        text(this.ramadan.getDayLabel(isRu, days), 825, '36px Arial');
        text(isRu ? 'до Рамадана' : 'until Ramadan', 885, '28px Arial', '#eed6b3');
      }
      text(isRu ? 'Пусть сердце будет готово' : 'May our hearts be ready', 1000, 'italic 35px Georgia');
      const target = this.ramadan.targetDate.toLocaleDateString(isRu ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      text((isRu ? 'Ориентировочно · ' : 'Expected · ') + target, 1628, '28px Georgia');
      text(isRu ? 'Дата зависит от наблюдения луны' : 'Date depends on local moon sighting', 1674, '20px Arial', '#e0d2c5', 840);
      ctx.strokeStyle = 'rgba(244, 224, 187, .25)';
      ctx.beginPath();
      ctx.moveTo(140, 1704);
      ctx.lineTo(940, 1704);
      ctx.stroke();
      text(new URL(this.shareUrl).host + new URL(this.shareUrl).pathname, 1762, '32px Arial', '#f3dbb0', 840);
      text(isRu ? 'Создай свою карточку на сайте' : 'Create your own card on the site', 1810, '27px Arial', '#fff7eb', 840);
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Export failed')), 'image/png'));
      if (active()) this.file.set(new File([blob], `ramadan-${days}-${isRu ? 'ru' : 'en'}.png`, { type: 'image/png' }));
    } catch {
      if (!active()) return;
      this.background = undefined;
      this.failed.set(true);
      this.message.set(isRu ? 'Не удалось создать карточку. Обновите страницу и попробуйте ещё раз.' : 'Could not create the card. Refresh the page and try again.');
    }
  }

  download() {
    const file = this.file();
    if (!file || this.busy()) return;
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
    this.message.set(this.lang.t('PNG downloaded. Add it to your story and attach the site link.', 'PNG скачан. Добавьте его в сторис и прикрепите ссылку на сайт.'));
  }

  async share() {
    const file = this.file();
    if (!file || this.busy()) return;
    this.message.set('');
    try {
      if (!navigator.share || !navigator.canShare?.({ files: [file] })) {
        this.download();
        return;
      }
      this.busy.set(true);
      // The file is prepared in advance so share() retains the user's tap activation.
      await navigator.share({ files: [file], title: this.lang.t('Awaiting Ramadan', 'В ожидании Рамадана'), text: this.shareUrl });
      this.message.set(this.lang.t('Card shared.', 'Карточка отправлена.'));
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) {
        this.message.set(this.lang.t('Could not open sharing. Use “Download PNG” to save the card.', 'Не удалось открыть меню. Сохраните карточку кнопкой «Скачать PNG».'));
      }
    } finally {
      this.busy.set(false);
    }
  }

  async copyLink() {
    try {
      await navigator.clipboard.writeText(this.shareUrl);
      this.message.set(this.lang.t('Site link copied.', 'Ссылка на сайт скопирована.'));
    } catch {
      this.message.set(this.lang.t('Copy this link: ', 'Скопируйте ссылку: ') + this.shareUrl);
    }
  }
}
