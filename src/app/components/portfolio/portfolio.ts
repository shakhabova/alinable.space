import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type CategoryId = 'fintech' | 'brand';

interface Project {
  title: string;
  subtitle: string;
  subtitleRu: string;
  label: string;
  labelRu: string;
  description: string;
  descriptionRu: string;
  tags: string[];
  tagsRu: string[];
  themeClass: string;
  category: CategoryId;
  image: string;
  domain: string;
}

interface Category {
  id: CategoryId;
  tabEn: string;
  tabRu: string;
  titleEn: string;
  titleRu: string;
  descEn: string;
  descRu: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  lang = inject(LanguageService);

  activeCategory = signal<CategoryId>('fintech');

  readonly categories: Category[] = [
    {
      id: 'fintech',
      tabEn: 'Fintech Platforms',
      tabRu: 'Финтех-платформы',
      titleEn: 'Fintech Experience',
      titleRu: 'Опыт в Fintech',
      descEn: 'A selection of fintech platforms, crypto interfaces, and responsive web products I’ve worked on — combining frontend development, product thinking, and attention to user experience.',
      descRu: 'Подборка fintech-платформ, crypto-интерфейсов и адаптивных web-продуктов, над которыми я работала, объединяя frontend-разработку, продуктовый подход и внимание к пользовательскому опыту.',
    },
    {
      id: 'brand',
      tabEn: 'Brand & Landing Sites',
      tabRu: 'Лендинги и бренд-сайты',
      titleEn: 'Brand & Landing',
      titleRu: 'Бренды и лендинги',
      descEn: 'Landing pages and personal-brand sites for experts and small businesses — crafted with clear structure, strong identity, and responsive, detail-driven design.',
      descRu: 'Лендинги и сайты для личного бренда экспертов и малого бизнеса — с понятной структурой, сильной айдентикой и адаптивным дизайном с вниманием к деталям.',
    },
  ];

  readonly projects: Project[] = [
    {
      title: 'Tonio World',
      subtitle: 'Fintech website / Frontend development',
      subtitleRu: 'Финтех-сайт / Фронтенд-разработка',
      label: 'FINTECH PLATFORM',
      labelRu: 'ФИНТЕХ ПЛАТФОРМА',
      description: 'A premium, modern financial technology platform built to deliver responsive, seamless investment tracking and wallet operations.',
      descriptionRu: 'Премиальная финансовая платформа для удобного отслеживания инвестиций и операций с кошельками.',
      tags: ['Adaptive layout', 'Frontend development', 'Fintech', 'Responsive UI'],
      tagsRu: ['Адаптивный макет', 'Фронтенд-разработка', 'Финтех', 'Отзывчивый UI'],
      themeClass: 'theme-tonio',
      category: 'fintech',
      image: '/tonio-project.png',
      domain: 'tonio.world',
    },
    {
      title: 'Coinforge',
      subtitle: 'Crypto platform website / Frontend development',
      subtitleRu: 'Криптоплатформа / Фронтенд-разработка',
      label: 'DEFI PLATFORM',
      labelRu: 'DEFI ПЛАТФОРМА',
      description: 'A modern crypto wallet platform for fast and secure digital asset transfers, with a clean interface, responsive layouts, and user-friendly transaction flow.',
      descriptionRu: 'Современная криптоплатформа с криптокошельками для быстрых и безопасных переводов цифровых активов, чистым интерфейсом и адаптивной версткой.',
      tags: ['Crypto', 'Frontend development', 'Responsive UI'],
      tagsRu: ['Крипта', 'Фронтенд-разработка', 'Отзывчивый UI'],
      themeClass: 'theme-coinforge',
      category: 'fintech',
      image: '/coinforge.png',
      domain: 'coinforge.online',
    },
    {
      title: 'Valut Currency',
      subtitle: 'Money transfer platform / Frontend development',
      subtitleRu: 'Платформа денежных переводов / Фронтенд',
      label: 'REMITTANCE GATEWAY',
      labelRu: 'ШЛЮЗ ПЕРЕВОДОВ',
      description: 'A high-performance global remittance application featuring micro-animations, real-time rate calculators, and secure UI templates.',
      descriptionRu: 'Высокопроизводительный сервис денежных переводов с калькулятором курсов и микро-анимациями.',
      tags: ['Fintech', 'Money Transfer', 'Responsive UI', 'Frontend Development'],
      tagsRu: ['Финтех', 'Денежные переводы', 'Отзывчивый UI', 'Фронтенд-разработка'],
      themeClass: 'theme-valut',
      category: 'fintech',
      image: '/currency.png',
      domain: 'valutcurrency.com',
    },
    {
      title: 'Mali Studio',
      subtitle: 'Personal brand website / Frontend development',
      subtitleRu: 'Сайт личного бренда / Фронтенд',
      label: 'CONTENT CREATOR',
      labelRu: 'КОНТЕНТ-КРЕАТОР',
      description: 'A cinematic personal-brand site for a content creator and director, featuring an interactive pricing calculator, downloadable guides, and a refined, story-driven aesthetic.',
      descriptionRu: 'Кинематографичный сайт личного бренда для контент-креатора и режиссёра — с интерактивным калькулятором стоимости, гайдами для скачивания и эстетикой, построенной на сторителлинге.',
      tags: ['Personal Brand', 'Landing Page', 'Interactive Calculator', 'Responsive UI'],
      tagsRu: ['Личный бренд', 'Лендинг', 'Интерактивный калькулятор', 'Отзывчивый UI'],
      themeClass: 'theme-mali',
      category: 'brand',
      image: '/landing1.PNG',
      domain: 'mali.studio',
    },
    {
      title: 'Asa Aisa',
      subtitle: 'Kindergarten website / Frontend development',
      subtitleRu: 'Сайт детского сада / Фронтенд',
      label: 'MONTESSORI SITE',
      labelRu: 'САЙТ ДЕТСКОГО САДА',
      description: 'A warm, trust-building website for a Montessori kindergarten — clear program structure, a daily schedule and menu, and a friendly booking flow for parents.',
      descriptionRu: 'Тёплый, вызывающий доверие сайт для Монтессори-сада — с понятной структурой программы, распорядком дня и меню, а также удобной записью на экскурсию для родителей.',
      tags: ['Kids & Education', 'Landing Page', 'Booking Flow', 'Responsive UI'],
      tagsRu: ['Дети и образование', 'Лендинг', 'Запись онлайн', 'Отзывчивый UI'],
      themeClass: 'theme-asa',
      category: 'brand',
      image: '/landing2.JPG',
      domain: 'asa-aisa.ru',
    },
    {
      title: 'Alsu Hakim Doula',
      subtitle: 'Doula website / Frontend development',
      subtitleRu: 'Сайт дулы / Фронтенд',
      label: 'DOULA WEBSITE',
      labelRu: 'САЙТ ДУЛЫ',
      description: 'A calm, modern website for a birth doula — gentle visual language, clear service structure, certificates, and a simple path to book a first meeting.',
      descriptionRu: 'Спокойный современный сайт для дулы — мягкий визуальный язык, понятная структура услуг, сертификаты и простой путь к записи на первую встречу.',
      tags: ['Personal Brand', 'Landing Page', 'Calm Design', 'Responsive UI'],
      tagsRu: ['Личный бренд', 'Лендинг', 'Спокойный дизайн', 'Отзывчивый UI'],
      themeClass: 'theme-doula',
      category: 'brand',
      image: '/landing3.JPG',
      domain: 'alsu-doula.com',
    },
    {
      title: 'Zarema Zulaeva',
      subtitle: 'Psychologist website / Frontend development',
      subtitleRu: 'Сайт психолога / Фронтенд',
      label: 'PSYCHOLOGIST SITE',
      labelRu: 'САЙТ ПСИХОЛОГА',
      description: 'A professional personal site for a clinical psychologist — a trustworthy, structured presentation of methods and certificates, with an easy session-booking form.',
      descriptionRu: 'Профессиональный персональный сайт для клинического психолога — доверительная, структурированная подача методов и сертификатов с удобной формой записи на сессию.',
      tags: ['Personal Brand', 'Landing Page', 'Trust & Clarity', 'Responsive UI'],
      tagsRu: ['Личный бренд', 'Лендинг', 'Доверие и ясность', 'Отзывчивый UI'],
      themeClass: 'theme-zarema',
      category: 'brand',
      image: '/landing4.PNG',
      domain: 'zulaeva.ru',
    },
  ];

  activeMeta = computed(
    () => this.categories.find((c) => c.id === this.activeCategory()) ?? this.categories[0]
  );

  filteredProjects = computed(() =>
    this.projects.filter((p) => p.category === this.activeCategory())
  );

  countFor(id: CategoryId): number {
    return this.projects.filter((p) => p.category === id).length;
  }

  setCategory(id: CategoryId) {
    this.activeCategory.set(id);
  }
}
