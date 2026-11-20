import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Desk } from './desk';
import { signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

describe('Desk interactions', () => {
  let fixture: ComponentFixture<Desk>;
  let root: HTMLElement;

  beforeEach(async () => {
    const currentLang = signal<'EN' | 'RU'>('RU');
    await TestBed.configureTestingModule({
      imports: [Desk],
      providers: [{ provide: LanguageService, useValue: {
        currentLang,
        t: (en: string, ru: string) => currentLang() === 'EN' ? en : ru,
      } }],
    }).compileComponents();
    fixture = TestBed.createComponent(Desk);
    fixture.componentInstance.lang.currentLang.set('RU');
    root = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('previews a list item on the photo and restores the pinned selection on leave', async () => {
    const button = root.querySelectorAll<HTMLButtonElement>('.equipment-button')[1];
    button.dispatchEvent(new MouseEvent('mouseenter'));
    await fixture.whenStable();
    expect(root.querySelector('.photo-target.is-active')?.getAttribute('aria-label')).toBe('Вертикальный монитор');
    expect(root.querySelector('#desk-detail')?.textContent).toContain('Портретная ориентация');
    button.dispatchEvent(new MouseEvent('mouseleave'));
    await fixture.whenStable();
    expect(root.querySelector('.photo-target.is-active')?.getAttribute('aria-label')).toBe('Основной монитор');
  });

  it('pins a photo selection and synchronizes the description and list', async () => {
    const target = root.querySelector('.photo-target[aria-label="Мышь"]')!;
    target.dispatchEvent(new MouseEvent('click'));
    target.dispatchEvent(new MouseEvent('mouseleave'));
    await fixture.whenStable();
    expect(root.querySelector('.equipment-button.is-active')?.textContent).toContain('Мышь');
    expect(root.querySelector('#desk-detail')?.textContent).toContain('GravaStar Mercury M2');
    expect(target.getAttribute('aria-pressed')).toBe('true');
  });

  it('supports selecting a photo object with the keyboard', async () => {
    const target = root.querySelector('.photo-target[aria-label="Клавиатура"]')!;
    target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await fixture.whenStable();
    expect(root.querySelector('#desk-detail button')?.textContent).toContain('Посмотреть клавиатуры');
    expect(root.querySelector('.equipment-button.is-active')?.textContent).toContain('Клавиатура');
  });

  it('keeps surface hit areas behind the objects placed on them', () => {
    const labels = Array.from(root.querySelectorAll('.photo-target'), item => item.getAttribute('aria-label'));
    expect(labels.indexOf('Стол')).toBeLessThan(labels.indexOf('Коврик на столе'));
    expect(labels.indexOf('Коврик на столе')).toBeLessThan(labels.indexOf('Клавиатура'));
    expect(labels.indexOf('Коврик на столе')).toBeLessThan(labels.indexOf('Подставка под запястья'));
  });

  for (const label of ['Стол', 'Микрофон', 'Наушники', 'Коврик на столе', 'Подставка под запястья', 'Читалка Kindle']) {
    it(`synchronizes photo and list selection for ${label}`, async () => {
      const target = root.querySelector(`.photo-target[aria-label="${label}"]`)!;
      target.dispatchEvent(new MouseEvent('mouseenter'));
      await fixture.whenStable();
      expect(root.querySelector('.equipment-button.is-active')?.textContent).toContain(label);
      expect(root.querySelector('#desk-detail .eyebrow')?.textContent).toContain(label);
      const button = Array.from(root.querySelectorAll<HTMLButtonElement>('.equipment-button')).find(item => item.textContent?.includes(label))!;
      button.click();
      target.dispatchEvent(new MouseEvent('mouseleave'));
      await fixture.whenStable();
      expect(target.getAttribute('aria-pressed')).toBe('true');
    });
  }

  it('shows product photos and descriptions without shop links', async () => {
    for (const id of ['monitor', 'portrait', 'kindle', 'headphones', 'microphone', 'mouse', 'desk-mat', 'wrist-rest', 'keyboard']) {
      fixture.componentInstance.selectItem(id);
      await fixture.whenStable();
      const product = fixture.componentInstance.activeItem().product!;
      expect(root.querySelector('#desk-detail h3')?.textContent).toContain(product.name.ru);
      expect(root.querySelector('#desk-detail img')?.getAttribute('src')).toBe(product.photo);
      expect(root.querySelector('#desk-detail a')).toBeNull();
      expect(root.querySelector('#desk-detail')?.textContent).not.toContain('пример');
    }
    expect(root.querySelector('#keyboard-detail img')?.getAttribute('src')).toBe('/desk-products/gravastar-mercury-k1-pro.jpg');
  });

  it('switches real keyboard photos and translated specs', async () => {
    root.querySelectorAll<HTMLButtonElement>('.keyboard-choice')[1].click();
    await fixture.whenStable();
    expect(root.querySelector('#keyboard-detail h3')?.textContent).toContain('AJAZZ AK820 Pro');
    expect(root.querySelector('#keyboard-detail img')?.getAttribute('src')).toBe('/desk-products/ajazz-ak820-pro.jpg');
    fixture.componentInstance.lang.currentLang.set('EN');
    await fixture.whenStable();
    expect(root.querySelector('#keyboard-detail .specs')?.textContent).toContain('TFT screen');
    root.querySelectorAll<HTMLButtonElement>('.keyboard-choice')[2].click();
    await fixture.whenStable();
    expect(root.querySelector('#keyboard-detail h3')?.textContent).toContain('Logitech Craft');
    expect(root.querySelector('#keyboard-detail img')?.getAttribute('src')).toBe('/desk-products/logitech-craft.png');
    expect(root.querySelectorAll('.keyboard-choice[aria-pressed="true"]').length).toBe(1);
  });
});



