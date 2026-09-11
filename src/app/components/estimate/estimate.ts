import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

export interface PricingTier {
  id: string;
  badge?: { en: string; ru: string };
  titleEn: string;
  titleRu: string;
  taglineEn: string;
  taglineRu: string;
  priceEn: string;
  priceRu: string;
  timelineEn: string;
  timelineRu: string;
  idealForEn: string;
  idealForRu: string;
  featuresEn: string[];
  featuresRu: string[];
  popular?: boolean;
}

export interface MatcherOption {
  id: string;
  labelEn: string;
  labelRu: string;
  descEn: string;
  descRu: string;
  icon: string;
}

export interface FaqItem {
  id: number;
  questionEn: string;
  questionRu: string;
  answerEn: string;
  answerRu: string;
}

@Component({
  selector: 'app-estimate',
  imports: [RouterLink],
  templateUrl: './estimate.html',
  styleUrl: './estimate.css',
})
export class Estimate {
  lang = inject(LanguageService);

  readonly tiers: PricingTier[] = [
    {
      id: 'landing',
      titleEn: 'Landing & Promo',
      titleRu: 'Лендинг и промо',
      taglineEn: 'Fast launch with high visual impact and conversion focus.',
      taglineRu: 'Быстрый запуск с ярким визуалом и фокусом на конверсию.',
      priceEn: 'from $800',
      priceRu: 'от $800',
      timelineEn: '1 – 2 weeks',
      timelineRu: '1 – 2 недели',
      idealForEn: 'Product launches, marketing campaigns, startups, lead generation.',
      idealForRu: 'Запуск продуктов, маркетинг, спецпроекты и презентация услуг.',
      featuresEn: [
        'Custom bespoke design in Figma (no generic templates)',
        '100% fluid responsive layout (mobile, tablet, desktop)',
        'Polished micro-animations and interactive feedback',
        'Basic SEO setup, OpenGraph, and analytics tags',
        'Form integration (Telegram, Email, CRM webhook)',
        '14 days of post-launch warranty & support',
      ],
      featuresRu: [
        'Индивидуальный дизайн в Figma без шаблонных решений',
        '100% адаптивная верстка (мобильные, планшеты, десктоп)',
        'Плавные микроанимации и интерактивные сценарии',
        'Базовая SEO-оптимизация, OpenGraph и подключение метрик',
        'Интеграция форм (Telegram-бот, почта, CRM webhook)',
        '14 дней гарантийной поддержки после запуска',
      ],
    },
    {
      id: 'corporate',
      titleEn: 'Corporate & Multi-page',
      titleRu: 'Корпоративный сайт',
      popular: true,
      badge: { en: 'Most Popular', ru: 'Популярный выбор' },
      taglineEn: 'Comprehensive brand presence, structured content, and CMS.',
      taglineRu: 'Полноценный брендовый сайт, структурированный контент и CMS.',
      priceEn: 'from $1,800',
      priceRu: 'от $1,800',
      timelineEn: '3 – 4 weeks',
      timelineRu: '3 – 4 недели',
      idealForEn: 'Companies, digital agencies, catalogs, editorial blogs, service businesses.',
      idealForRu: 'Компании, агентства, каталоги, блоги и сервисные бизнесы.',
      featuresEn: [
        'Information architecture, UX wireframing & full UI system',
        'Headless CMS or admin panel for effortless content editing',
        'Multi-language localization support (i18n) if needed',
        'CRM, newsletter, and automated lead capture integrations',
        'Speed optimization (90+ Google PageSpeed Core Web Vitals)',
        '30 days of warranty and content onboarding',
      ],
      featuresRu: [
        'Информационная архитектура, UX-прототипирование и UI-система',
        'Интеграция удобной CMS для легкого управления контентом',
        'Поддержка мультиязычности (i18n) при необходимости',
        'Интеграция с CRM, рассылками и аналитическими системами',
        'Оптимизация скорости (90+ Google PageSpeed Core Web Vitals)',
        '30 дней гарантии и помощь в первичном наполнении',
      ],
    },
    {
      id: 'webapp',
      titleEn: 'Web App & MVP',
      titleRu: 'Веб-приложение и MVP',
      taglineEn: 'Complex dynamic logic, user accounts, and API integrations.',
      taglineRu: 'Сложная динамическая логика, личные кабинеты и интеграция API.',
      priceEn: 'from $3,500',
      priceRu: 'от $3,500',
      timelineEn: '5 – 8 weeks',
      timelineRu: '5 – 8 недель',
      idealForEn: 'SaaS products, client portals, internal dashboards, startup MVPs.',
      idealForRu: 'SaaS-сервисы, личные кабинеты, дашборды, стартапы и MVP.',
      featuresEn: [
        'Robust frontend architecture (Angular / React / Next.js)',
        'Complex state management & reactive data streams',
        'Authentication, user roles, and security best practices',
        'Full REST, GraphQL or WebSocket API integration',
        'Modular reusable design system and unit tests',
        'Comprehensive documentation and developer handover',
      ],
      featuresRu: [
        'Надежная frontend-архитектура (Angular / React / Next.js)',
        'Стейт-менеджмент и реактивные потоки данных',
        'Авторизация, ролевая модель доступа и безопасность',
        'Интеграция REST, GraphQL или WebSocket API',
        'Модульная дизайн-система компонентов и тесты',
        'Техническая документация и передача репозитория',
      ],
    },
    {
      id: 'retainer',
      titleEn: 'Retainer & Sprints',
      titleRu: 'Поддержка и спринты',
      taglineEn: 'Continuous product development, refactoring, and feature delivery.',
      taglineRu: 'Постоянное развитие продукта, рефакторинг и разработка фич.',
      priceEn: 'from $40 / hour',
      priceRu: 'от $40 / час',
      timelineEn: 'Weekly / Monthly',
      timelineRu: 'По спринтам',
      idealForEn: 'Existing products needing continuous enhancement or dedicated expertise.',
      idealForRu: 'Работающие проекты, требующие регулярных доработок и сильного инженера.',
      featuresEn: [
        'Dedicated hours allocated each week to your backlog',
        'Direct async communication via Telegram / Slack',
        'UI refactoring, performance audits, and technical debt cleanup',
        'Fast turnaround on urgent fixes and priority features',
        'Transparent time tracking and weekly progress demos',
        'No lock-in contracts — scale up or down as needed',
      ],
      featuresRu: [
        'Выделенные часы каждую неделю под ваш бэклог',
        'Прямая коммуникация в Telegram / Slack без испорченного телефона',
        'Рефакторинг UI, аудит производительности и устранение техдолга',
        'Быстрый отклик на срочные правки и приоритетные задачи',
        'Прозрачный учет времени и регулярные отчеты/демо',
        'Гибкие условия без долгосрочной жесткой привязки',
      ],
    },
  ];

  // Project Matcher Options
  readonly goals: MatcherOption[] = [
    {
      id: 'launch',
      labelEn: 'Launch New Product',
      labelRu: 'Запустить новый продукт',
      descEn: 'Single page or promo website to validate an idea and capture leads',
      descRu: 'Лендинг или промо-сайт для быстрой проверки гипотезы и сбора заявок',
      icon: 'rocket',
    },
    {
      id: 'rebrand',
      labelEn: 'Company Website',
      labelRu: 'Сайт компании / Редизайн',
      descEn: 'Multi-page presence with brand identity, catalog, and CMS',
      descRu: 'Многостраничный сайт с фирменным стилем, каталогом и админкой',
      icon: 'globe',
    },
    {
      id: 'app',
      labelEn: 'Web App or Dashboard',
      labelRu: 'Веб-сервис или дашборд',
      descEn: 'Interactive software with user accounts, data views, and APIs',
      descRu: 'Интерактивный сервис с личным кабинетом, графиками и интеграцией API',
      icon: 'layers',
    },
    {
      id: 'retainer',
      labelEn: 'Iterate & Support',
      labelRu: 'Доработка и развитие',
      descEn: 'Enhance an existing codebase, optimize performance, build features',
      descRu: 'Улучшение существующего проекта, ускорение и планомерные доработки',
      icon: 'refresh',
    },
  ];

  readonly stages: MatcherOption[] = [
    {
      id: 'idea',
      labelEn: 'Raw Concept / Idea',
      labelRu: 'Только идея на словах',
      descEn: 'Needs scoping, architecture planning, and wireframing',
      descRu: 'Требуется проработка структуры, логики и прототипа',
      icon: 'lightbulb',
    },
    {
      id: 'brief',
      labelEn: 'Brief & Content Ready',
      labelRu: 'Есть ТЗ и тексты',
      descEn: 'Requirements and content are outlined, ready for design & build',
      descRu: 'Понятна структура и контент, нужен дизайн и реализация',
      icon: 'file-text',
    },
    {
      id: 'design',
      labelEn: 'Figma UI Ready',
      labelRu: 'Есть дизайн в Figma',
      descEn: 'Design files are complete, ready for frontend engineering',
      descRu: 'Макеты готовы, требуется качественная верстка и интеграция',
      icon: 'figma',
    },
    {
      id: 'backend',
      labelEn: 'Backend Ready',
      labelRu: 'Есть бэкенд / API',
      descEn: 'API is ready or in progress, needs rich client-side frontend',
      descRu: 'Серверная часть готова, нужен современный и надежный фронтенд',
      icon: 'server',
    },
  ];

  readonly priorities: MatcherOption[] = [
    {
      id: 'speed',
      labelEn: 'Speed to Market',
      labelRu: 'Сжатые сроки',
      descEn: 'Deliver the core value as quickly and efficiently as possible',
      descRu: 'Быстрый запуск ключевого функционала без лишней бюрократии',
      icon: 'zap',
    },
    {
      id: 'craft',
      labelEn: 'Visual Excellence',
      labelRu: 'Премиум-дизайн и вау-эффект',
      descEn: 'Deep micro-interactions, smooth animations, standout visual identity',
      descRu: 'Уникальный визуальный стиль, авторские анимации и внимание к деталям',
      icon: 'sparkle',
    },
    {
      id: 'architecture',
      labelEn: 'Scalable Architecture',
      labelRu: 'Масштабируемость и код',
      descEn: 'Modular, testable frontend built for long-term growth',
      descRu: 'Чистая модульная архитектура под рост и долгосрочное масштабирование',
      icon: 'shield',
    },
    {
      id: 'balance',
      labelEn: 'Balanced & Pragmatic',
      labelRu: 'Оптимальный баланс',
      descEn: 'Harmonious balance between investment, speed, and quality',
      descRu: 'Разумный баланс бюджета, скорости запуска и надежности решения',
      icon: 'target',
    },
  ];

  // Matcher Signals
  selectedGoal = signal<string>('rebrand');
  selectedStage = signal<string>('brief');
  selectedPriority = signal<string>('craft');

  // Selected Tier (for highlighting or quick action)
  activeTierId = signal<string>('corporate');

  // Dynamic recommendation computed based on 3 selections
  recommendation = computed(() => {
    const goal = this.selectedGoal();
    const stage = this.selectedStage();
    const priority = this.selectedPriority();

    let tier = this.tiers[1]; // default corporate
    let budgetEn = 'from $1,800';
    let budgetRu = 'от $1,800';
    let timelineEn = '3 – 4 weeks';
    let timelineRu = '3 – 4 недели';
    let stackEn = 'Angular / Modern CSS / Headless CMS';
    let stackRu = 'Angular / Чистый CSS / Headless CMS';
    let adviceEn = 'We recommend starting with a short 20-minute alignment call to finalize site architecture and review your content structure.';
    let adviceRu = 'Рекомендуем начать с 20-минутного созвона, чтобы зафиксировать структуру страниц и согласовать формат контента.';

    if (goal === 'launch') {
      tier = this.tiers[0];
      budgetEn = priority === 'speed' ? 'from $800' : 'from $1,000';
      budgetRu = priority === 'speed' ? 'от $800' : 'от $1,000';
      timelineEn = priority === 'speed' ? '5 – 8 days' : '1 – 2 weeks';
      timelineRu = priority === 'speed' ? '5 – 8 дней' : '1 – 2 недели';
      stackEn = 'Lightweight SPA / CSS Animations / Webhooks';
      stackRu = 'Быстрый SPA / CSS Анимации / Webhooks';
      adviceEn = stage === 'idea'
        ? 'Since you are starting from a raw idea, we will first create a wireframe to hone your value proposition before coding.'
        : 'With your materials ready, we can move directly into rapid design iterations and interactive prototyping.';
      adviceRu = stage === 'idea'
        ? 'Так как проект на стадии идеи, сначала соберем понятный прототип и структуру оффера, а затем перейдем к верстке.'
        : 'Материалы уже готовы — можно сразу переходить к сборке чистого макета и интерактивной верстке.';
    } else if (goal === 'app') {
      tier = this.tiers[2];
      budgetEn = priority === 'architecture' ? 'from $4,000' : 'from $3,500';
      budgetRu = priority === 'architecture' ? 'от $4,000' : 'от $3,500';
      timelineEn = '5 – 8 weeks';
      timelineRu = '5 – 8 недель';
      stackEn = 'Angular Signals / TypeScript / REST or GraphQL API';
      stackRu = 'Angular Signals / TypeScript / REST или GraphQL API';
      adviceEn = stage === 'backend'
        ? 'Since the backend is already in place, we can integrate the frontend directly against your existing API contracts.'
        : 'We will design the core user journeys and define API contracts together before implementing full state logic.';
      adviceRu = stage === 'backend'
        ? 'Бэкенд уже есть — можно сразу подключить клиентскую часть к готовым контрактам API и сосредоточиться на UI/UX.'
        : 'Сначала спроектируем ключевые пользовательские сценарии и структуру данных, а затем реализуем стейт и экраны.';
    } else if (goal === 'retainer') {
      tier = this.tiers[3];
      budgetEn = 'from $40 / hour or sprint retainer';
      budgetRu = 'от $40 / час или спринты';
      timelineEn = 'Flexible sprint cadence';
      timelineRu = 'Гибкие недельные спринты';
      stackEn = 'Your Existing Tech Stack + Best Practices';
      stackRu = 'Ваш текущий стек + внедрение надежных практик';
      adviceEn = 'We will review your repository, identify quick wins, and establish a clear bi-weekly sprint cadence.';
      adviceRu = 'Проведем быстрый аудит существующего репозитория, выделим критичные задачи и согласуем ритм спринтов.';
    } else {
      // corporate
      if (stage === 'design') {
        budgetEn = 'from $1,400';
        budgetRu = 'от $1,400';
        timelineEn = '2 – 3 weeks';
        timelineRu = '2 – 3 недели';
        adviceEn = 'Your Figma designs are already set, which allows us to focus 100% on high-fidelity frontend engineering and responsiveness.';
        adviceRu = 'Макеты уже готовы — это сократит время и позволит полностью сфокусироваться на идеальной верстке и логике.';
      }
    }

    return {
      tier,
      budgetEn,
      budgetRu,
      timelineEn,
      timelineRu,
      stackEn,
      stackRu,
      adviceEn,
      adviceRu,
    };
  });

  // Pricing Transparency Pillars
  readonly costPillars = [
    {
      id: 'architecture',
      icon: 'layers',
      titleEn: 'Architecture & Logic',
      titleRu: 'Сложность логики и данных',
      descEn: 'A static showcase website requires fewer engineering hours than an app with user authentication, role-based access, and reactive state.',
      descRu: 'Презентационному сайту нужно меньше инженерных часов, чем сервису с авторизацией, правами доступа и сложным реактивным стейтом.',
    },
    {
      id: 'craft',
      icon: 'sparkle',
      titleEn: 'Visuals & Animation Depth',
      titleRu: 'Глубина дизайна и анимаций',
      descEn: 'Clean, minimalist layouts move faster than bespoke dynamic shaders, complex micro-interactions, or interactive canvas elements.',
      descRu: 'Аккуратный чистый интерфейс собирается быстрее, чем уникальная авторская графика, 3D-сцены и сложные кинетические анимации.',
    },
    {
      id: 'integrations',
      icon: 'api',
      titleEn: 'Integrations & Ecosystem',
      titleRu: 'Интеграции и сервисы',
      descEn: 'Connecting standard contact forms is straightforward; integrating custom CRM systems, billing gateways, or legacy databases adds scope.',
      descRu: 'Базовая отправка заявок в Telegram делается быстро; подключение CRM, платежных шлюзов или внешних API требует больше настройки.',
    },
    {
      id: 'timeline',
      icon: 'clock',
      titleEn: 'Delivery Pace & Priority',
      titleRu: 'Срочность и формат темпа',
      descEn: 'Standard timelines ensure optimal pacing. Expedited launches require dedicated sprint allocation and focused scheduling.',
      descRu: 'Размеренный плановый темп обеспечивает комфортную разработку. Срочные запуски требуют выделенного спринта и полного фокуса.',
    },
  ];

  // Included by default
  readonly includedStandards = [
    {
      titleEn: '100% Responsive & Fluid',
      titleRu: '100% Адаптивность',
      descEn: 'Flawless layout across smartphones, tablets, laptops, and ultra-wide displays.',
      descRu: 'Безупречное отображение на телефонах, планшетах, ноутбуках и больших мониторах.',
    },
    {
      titleEn: '90+ Google Core Web Vitals',
      titleRu: 'Высокая скорость загрузки',
      descEn: 'Clean code, optimized assets, and zero unnecessary script bloat.',
      descRu: 'Оптимизированные ассеты, легкий код и зеленые показатели PageSpeed.',
    },
    {
      titleEn: 'Maintainable Clean Code',
      titleRu: 'Чистый модульный код',
      descEn: 'Semantic HTML, modern CSS, and strictly typed TypeScript with comments.',
      descRu: 'Семантическая разметка, чистый CSS и строгая типизация TypeScript.',
    },
    {
      titleEn: 'SEO & Social Meta Tags',
      titleRu: 'Базовая SEO-подготовка',
      descEn: 'Structured headings, favicon packages, and attractive OpenGraph previews.',
      descRu: 'Правильная иерархия заголовков, фавиконки и красивые сниппеты для соцсетей.',
    },
    {
      titleEn: 'Post-Launch Warranty',
      titleRu: 'Гарантийный период',
      descEn: '14 to 30 days of free bug-fixing and fine-tuning after production release.',
      descRu: 'От 14 до 30 дней бесплатного устранения любых скрытых дефектов после релиза.',
    },
    {
      titleEn: 'Direct Engineer Contact',
      titleRu: 'Прямая связь без посредников',
      descEn: 'You communicate directly with the engineer building your product.',
      descRu: 'Общение напрямую со специалистом без испорченного телефона и лишних звеньев.',
    },
  ];

  // Pricing FAQs
  readonly faqs: FaqItem[] = [
    {
      id: 1,
      questionEn: 'How is payment structured?',
      questionRu: 'Как устроена схема оплаты?',
      answerEn: 'For fixed-scope projects, we usually work with a 50% upfront deposit before starting, and 50% upon final acceptance and deployment. For larger multi-week projects, we break the scope into milestones (e.g., 30% / 40% / 30%) or weekly sprints.',
      answerRu: 'Для проектов с фиксированным объемом стандартный формат — 50% предоплата перед стартом и 50% после финальной приемки и деплоя. Для крупных проектов мы делим оплату на этапы (например, 30% / 40% / 30%) либо работаем недельными спринтами.',
    },
    {
      id: 2,
      questionEn: 'What if project requirements change midway?',
      questionRu: 'Что делать, если в процессе изменятся требования?',
      answerEn: 'We embrace agile flexibility. Before starting, we lock down a clear initial scope. If new ideas or feature requests arise during development, we discuss their impact on timeline and cost, and either swap out lower-priority items or schedule them as a Phase 2 release.',
      answerRu: 'Мы работаем гибко. Перед стартом фиксируем базовый скоуп задач. Если в процессе появляются новые пожелания, мы открыто обсуждаем их влияние на срок и бюджет: либо заменяем менее важные задачи, либо выносим их во второй релиз.',
    },
    {
      id: 3,
      questionEn: 'Do you provide domain registration and hosting?',
      questionRu: 'Входит ли покупка домена и хостинга?',
      answerEn: 'I assist you in selecting the ideal hosting provider (e.g., Vercel, Netlify, Cloudflare, VPS) and configuring DNS, SSL certificates, and custom domains. The accounts and billing remain 100% under your ownership.',
      answerRu: 'Я помогаю подобрать оптимальную платформу (Vercel, Netlify, Cloudflare, VPS) и полностью настраиваю деплой, SSL-сертификаты и DNS. Сам аккаунт и домен регистрируются напрямую на вас, оставаясь под вашим полным контролем.',
    },
    {
      id: 4,
      questionEn: 'Do you work with official contracts and invoices?',
      questionRu: 'Работаете ли вы официально по договору?',
      answerEn: 'Yes, I work legally with service agreements, non-disclosure agreements (NDA upon request), and provide official tax receipts and closing documents for businesses.',
      answerRu: 'Да, я работаю официально (самозанятость / договор оказания услуг), при необходимости подписываем соглашение о конфиденциальности (NDA) и формируем официальные чеки и закрывающие акты.',
    },
  ];

  activeFaqId = signal<number | null>(1);

  toggleFaq(id: number) {
    this.activeFaqId.update((current) => (current === id ? null : id));
  }

  selectTier(id: string) {
    this.activeTierId.set(id);
  }

  scrollToMatcher() {
    const el = document.getElementById('project-matcher');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
