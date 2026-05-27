import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  lang = inject(LanguageService);

  projects = [
    {
      title: 'Tonio World',
      subtitle: 'Fintech website / Frontend development',
      subtitleRu: 'Финтех-сайт / Фронтенд-разработка',
      description: 'A premium, modern financial technology platform built to deliver responsive, seamless investment tracking and wallet operations.',
      descriptionRu: 'Премиальная финансовая платформа для удобного отслеживания инвестиций и операций с кошельками.',
      tags: ['Adaptive layout', 'Frontend development', 'Fintech', 'Responsive UI'],
      tagsRu: ['Адаптивный макет', 'Фронтенд-разработка', 'Финтех', 'Отзывчивый UI'],
      themeClass: 'theme-tonio',
      link: '#',
      icon: '💳'
    },
    {
      title: 'Coinforge',
      subtitle: 'Crypto platform website / Frontend development',
      subtitleRu: 'Криптоплатформа / Фронтенд-разработка',
      description: 'A modern crypto wallet platform for fast and secure digital asset transfers, with a clean interface, responsive layouts, and user-friendly transaction flow.',
      descriptionRu: 'Современная криптоплатформа с криптокошельками для быстрых и безопасных переводов цифровых активов, чистым интерфейсом и адаптивной версткой.',
      tags: ['Crypto', 'Frontend development', 'Responsive UI'],
      tagsRu: ['Крипта', 'Фронтенд-разработка', 'Отзывчивый UI'],
      themeClass: 'theme-coinforge',
      link: '#',
      icon: '🪙'
    },
    {
      title: 'Valut Currency',
      subtitle: 'Money transfer platform / Frontend development',
      subtitleRu: 'Платформа денежных переводов / Фронтенд',
      description: 'A high-performance global remittance application featuring micro-animations, real-time rate calculators, and secure UI templates.',
      descriptionRu: 'Высокопроизводительный сервис денежных переводов с калькулятором курсов и микро-анимациями.',
      tags: ['Fintech', 'Money Transfer', 'Responsive UI', 'Frontend Development'],
      tagsRu: ['Финтех', 'Денежные переводы', 'Отзывчивый UI', 'Фронтенд-разработка'],
      themeClass: 'theme-valut',
      link: '#',
      icon: '💸'
    }
  ];
}
