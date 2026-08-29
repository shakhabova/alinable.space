import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface ProjectType {
  id: string;
  en: string;
  ru: string;
  descEn: string;
  descRu: string;
  basePrice: number;
  baseWeeks: number;
  includedPages: number;
  icon: string;
}

interface Feature {
  id: string;
  en: string;
  ru: string;
  price: number;
  weeks: number;
  icon: string;
}

@Component({
  selector: 'app-estimate',
  imports: [RouterLink],
  templateUrl: './estimate.html',
  styleUrl: './estimate.css',
})
export class Estimate {
  lang = inject(LanguageService);

  readonly projectTypes: ProjectType[] = [
    {
      id: 'landing',
      en: 'Landing page',
      ru: 'Лендинг',
      descEn: 'A single, high-converting page',
      descRu: 'Одна страница с высокой конверсией',
      basePrice: 600,
      baseWeeks: 1.5,
      includedPages: 1,
      icon: '✦',
    },
    {
      id: 'website',
      en: 'Multi-page website',
      ru: 'Многостраничный сайт',
      descEn: 'A complete marketing website',
      descRu: 'Полноценный корпоративный сайт',
      basePrice: 1500,
      baseWeeks: 3,
      includedPages: 4,
      icon: '✧',
    },
    {
      id: 'webapp',
      en: 'Web application',
      ru: 'Веб-приложение',
      descEn: 'An interactive product with logic',
      descRu: 'Интерактивный продукт с логикой',
      basePrice: 3500,
      baseWeeks: 6,
      includedPages: 6,
      icon: '❋',
    },
    {
      id: 'fintech',
      en: 'Fintech dashboard',
      ru: 'Финтех-дашборд',
      descEn: 'Data-rich, secure financial UI',
      descRu: 'Насыщенный данными финансовый UI',
      basePrice: 5000,
      baseWeeks: 8,
      includedPages: 8,
      icon: '✺',
    },
  ];

  readonly features: Feature[] = [
    { id: 'responsive', en: 'Responsive design', ru: 'Адаптивный дизайн', price: 300, weeks: 0.5, icon: '▢' },
    { id: 'animations', en: 'Micro-animations', ru: 'Микроанимации', price: 500, weeks: 1, icon: '✷' },
    { id: 'i18n', en: 'Multi-language', ru: 'Мультиязычность', price: 400, weeks: 0.7, icon: '⟐' },
    { id: 'api', en: 'API integration', ru: 'Интеграция API', price: 800, weeks: 1.5, icon: '⇄' },
    { id: 'cms', en: 'CMS integration', ru: 'Интеграция CMS', price: 600, weeks: 1, icon: '☰' },
    { id: 'auth', en: 'Auth & accounts', ru: 'Авторизация', price: 700, weeks: 1.2, icon: '⛬' },
    { id: 'seo', en: 'SEO optimization', ru: 'SEO-оптимизация', price: 250, weeks: 0.4, icon: '◈' },
  ];

  selectedTypeId = signal<string>('website');
  pages = signal<number>(4);
  selectedFeatureIds = signal<string[]>(['responsive', 'animations']);
  rush = signal<boolean>(false);

  selectedType = computed(
    () => this.projectTypes.find((t) => t.id === this.selectedTypeId()) ?? this.projectTypes[0]
  );

  selectType(id: string) {
    const type = this.projectTypes.find((t) => t.id === id);
    this.selectedTypeId.set(id);
    if (type && this.pages() < type.includedPages) {
      this.pages.set(type.includedPages);
    }
  }

  isFeatureSelected(id: string): boolean {
    return this.selectedFeatureIds().includes(id);
  }

  toggleFeature(id: string) {
    this.selectedFeatureIds.update((ids) =>
      ids.includes(id) ? ids.filter((f) => f !== id) : [...ids, id]
    );
  }

  onPagesInput(event: Event) {
    this.pages.set(Number((event.target as HTMLInputElement).value));
  }

  extraPages = computed(() => Math.max(0, this.pages() - this.selectedType().includedPages));

  private readonly EXTRA_PAGE_PRICE = 150;
  private readonly EXTRA_PAGE_WEEKS = 0.3;

  private basePrice = computed(() => {
    const type = this.selectedType();
    const featurePrice = this.features
      .filter((f) => this.selectedFeatureIds().includes(f.id))
      .reduce((sum, f) => sum + f.price, 0);
    const total = type.basePrice + this.extraPages() * this.EXTRA_PAGE_PRICE + featurePrice;
    return this.rush() ? total * 1.3 : total;
  });

  totalWeeks = computed(() => {
    const type = this.selectedType();
    const featureWeeks = this.features
      .filter((f) => this.selectedFeatureIds().includes(f.id))
      .reduce((sum, f) => sum + f.weeks, 0);
    let weeks = type.baseWeeks + this.extraPages() * this.EXTRA_PAGE_WEEKS + featureWeeks;
    if (this.rush()) weeks *= 0.65;
    return Math.max(1, Math.round(weeks * 2) / 2);
  });

  priceMin = computed(() => Math.round(this.basePrice() / 50) * 50);
  priceMax = computed(() => Math.round((this.basePrice() * 1.3) / 50) * 50);

  format(value: number): string {
    return '$' + value.toLocaleString('en-US');
  }
}
