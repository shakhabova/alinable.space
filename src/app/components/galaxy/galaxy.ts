import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TechIcon } from './tech-icon';

interface Area {
  id: string;
  icon: string;
  accent: string;
  nameEn: string;
  nameRu: string;
  descEn: string;
  descRu: string;
  x: number;
  y: number;
  role: string;
}

interface DayStep {
  time: string;
  en: string;
  ru: string;
}

interface Role {
  id: string;
  name: string;
  icon: string;
  accent: string;
  catEn: string;
  catRu: string;
  descEn: string;
  descRu: string;
  doesEn: string[];
  doesRu: string[];
  learn: string[];
  fitEn: string[];
  fitRu: string[];
  notFitEn: string[];
  notFitRu: string[];
  day: DayStep[];
  levelEn: string;
  levelRu: string;
  durEn: string;
  durRu: string;
  salary: string;
}

@Component({
  selector: 'app-galaxy',
  imports: [TechIcon],
  templateUrl: './galaxy.html',
  styleUrl: './galaxy.css',
})
export class Galaxy {
  lang = inject(LanguageService);

  readonly areas: Area[] = [
    { id: 'dev', icon: 'code', accent: '#6366f1', nameEn: 'Development', nameRu: 'Разработка', descEn: 'Write code and build products', descRu: 'Пишут код и создают продукты', x: 24.3, y: 19.4, role: 'frontend' },
    { id: 'design', icon: 'design', accent: '#ec4899', nameEn: 'Design', nameRu: 'Дизайн', descEn: 'Make it beautiful and usable', descRu: 'Делают красиво и удобно', x: 75.7, y: 19.4, role: 'design' },
    { id: 'data', icon: 'chart', accent: '#06b6d4', nameEn: 'Data', nameRu: 'Данные', descEn: 'Work with data and analytics', descRu: 'Работают с данными и аналитикой', x: 89.1, y: 41.7, role: 'data' },
    { id: 'marketing', icon: 'megaphone', accent: '#f59e0b', nameEn: 'Marketing', nameRu: 'Маркетинг', descEn: 'Promote products and brands', descRu: 'Продвигают продукты и бренды', x: 81.5, y: 74.6, role: 'product' },
    { id: 'management', icon: 'people', accent: '#8b5cf6', nameEn: 'Management', nameRu: 'Менеджмент', descEn: 'Manage people and processes', descRu: 'Управляют людьми и процессами', x: 50, y: 90, role: 'product' },
    { id: 'testing', icon: 'bug', accent: '#10b981', nameEn: 'Testing', nameRu: 'Тестирование', descEn: 'Find bugs and improve quality', descRu: 'Ищут баги и улучшают качество', x: 18.5, y: 74.6, role: 'qa' },
    { id: 'infra', icon: 'server', accent: '#f97316', nameEn: 'Infrastructure', nameRu: 'Инфраструктура', descEn: 'Support and grow systems', descRu: 'Поддерживают и развивают системы', x: 10.9, y: 41.7, role: 'devops' },
  ];

  readonly roles: Role[] = [
    {
      id: 'frontend',
      name: 'Frontend Developer',
      icon: 'code',
      accent: '#6366f1',
      catEn: 'Development',
      catRu: 'Разработка',
      descEn: 'Builds the interfaces of sites and apps — everything the user sees. From buttons and forms to complex web apps.',
      descRu: 'Делает интерфейсы для сайтов и приложений — то, что видит пользователь. От кнопок и форм до сложных веб-приложений.',
      doesEn: ['Builds interfaces', 'Codes responsive layouts', 'Writes JS / TS logic', 'Connects to APIs'],
      doesRu: ['Создаёт интерфейсы', 'Верстает сайты', 'Пишет логику на JS/TS', 'Работает с API'],
      learn: ['HTML', 'CSS / SCSS', 'JavaScript / TypeScript', 'Angular / React / Vue', 'Git', 'REST API'],
      fitEn: ['You like the visual side', 'You enjoy solving tasks', 'You are detail-oriented', 'You like seeing results fast'],
      fitRu: ['Любишь визуальную часть', 'Любишь решать задачи', 'Внимателен к деталям', 'Хочешь видеть результат работы'],
      notFitEn: ['You dislike long bug hunts', "You can't stand markup", 'You only want to draw'],
      notFitRu: ['Не любишь долго искать баги', 'Терпеть не можешь верстать', 'Хочешь только рисовать, а не делать'],
      day: [
        { time: '09:00', en: 'Open the laptop and coffee', ru: 'Открываю ноутбук и кофе' },
        { time: '09:30', en: "Check today's tasks", ru: 'Смотрю задачи на сегодня' },
        { time: '11:00', en: 'Write code and fix bugs', ru: 'Пишу код и чиню баги' },
        { time: '13:00', en: 'Team sync (a must)', ru: 'Созвон с командой' },
        { time: '15:00', en: 'A bit more code and edits', ru: 'Ещё немного кода и правки' },
        { time: '17:30', en: "Check nothing's broken 😅", ru: 'Проверяю, что ничего не сломал 😅' },
      ],
      levelEn: 'Junior',
      levelRu: 'Junior',
      durEn: '6–12 months',
      durRu: '6–12 месяцев',
      salary: '$800 – $3000+',
    },
    {
      id: 'backend',
      name: 'Backend Developer',
      icon: 'gear',
      accent: '#10b981',
      catEn: 'Development',
      catRu: 'Разработка',
      descEn: 'Owns the server-side logic, databases and APIs — everything that runs under the hood.',
      descRu: 'Отвечает за серверную логику, базы данных и API — всё, что работает «под капотом».',
      doesEn: ['Writes server logic', 'Designs databases', 'Builds APIs', 'Handles security'],
      doesRu: ['Пишет серверную логику', 'Проектирует базы данных', 'Строит API', 'Отвечает за безопасность'],
      learn: ['Python / Node.js', 'SQL', 'PostgreSQL', 'REST API', 'Docker', 'Git'],
      fitEn: ['You love logic and algorithms', 'You are curious about data', 'You like optimizing things', 'You are fine with invisible work'],
      fitRu: ['Любишь логику и алгоритмы', 'Интересны данные', 'Нравится оптимизировать', 'Спокоен к невидимой работе'],
      notFitEn: ['You want a pretty result', 'You dislike debugging', "It's boring without visuals"],
      notFitRu: ['Хочешь видеть красивый результат', 'Не любишь дебажить', 'Скучно без визуала'],
      day: [
        { time: '09:00', en: 'Coffee and plans', ru: 'Кофе и планы' },
        { time: '10:00', en: 'Sort out API tasks', ru: 'Разбираю задачи по API' },
        { time: '12:00', en: 'Write and test logic', ru: 'Пишу и тестирую логику' },
        { time: '14:00', en: 'Optimize DB queries', ru: 'Оптимизирую запросы к БД' },
        { time: '16:00', en: 'Code review and deploy', ru: 'Код-ревью и деплой' },
      ],
      levelEn: 'Junior / Middle',
      levelRu: 'Junior / Middle',
      durEn: '8–14 months',
      durRu: '8–14 месяцев',
      salary: '$1000 – $4000+',
    },
    {
      id: 'fullstack',
      name: 'Fullstack Developer',
      icon: 'layers',
      accent: '#7c6cf5',
      catEn: 'Development',
      catRu: 'Разработка',
      descEn: 'Handles both frontend and backend — builds the whole product, from interface to server.',
      descRu: 'Умеет и фронтенд, и бэкенд — собирает продукт целиком, от интерфейса до сервера.',
      doesEn: ['Does frontend and backend', 'Builds the whole product', 'Links UI and server', 'Ships MVPs'],
      doesRu: ['Делает фронтенд и бэкенд', 'Собирает продукт целиком', 'Связывает интерфейс и сервер', 'Запускает MVP'],
      learn: ['HTML / CSS / JS', 'TypeScript', 'Node.js', 'SQL', 'Git', 'API'],
      fitEn: ['You like the big picture', 'You enjoy variety', 'You learn new things fast', 'You want to build solo'],
      fitRu: ['Нравится картина целиком', 'Любишь разнообразие', 'Быстро учишься новому', 'Хочешь делать проекты сам'],
      notFitEn: ['You like going deep on one thing', 'You dislike switching context', 'You want a narrow niche'],
      notFitRu: ['Любишь глубоко копать одно', 'Не любишь переключаться', 'Хочешь узкую специализацию'],
      day: [
        { time: '09:00', en: 'Coffee and task review', ru: 'Кофе и обзор задач' },
        { time: '10:00', en: 'Build the interface', ru: 'Верстаю интерфейс' },
        { time: '12:00', en: 'Write the server part', ru: 'Пишу серверную часть' },
        { time: '14:00', en: 'Link front and back', ru: 'Связываю фронт и бэк' },
        { time: '16:30', en: 'Test and deploy', ru: 'Тестирую и деплою' },
      ],
      levelEn: 'Middle',
      levelRu: 'Middle',
      durEn: '10–18 months',
      durRu: '10–18 месяцев',
      salary: '$1500 – $5000+',
    },
    {
      id: 'qa',
      name: 'QA Engineer',
      icon: 'check',
      accent: '#14b8a6',
      catEn: 'Testing',
      catRu: 'Тестирование',
      descEn: 'Makes sure the product works without errors — finds bugs before users do.',
      descRu: 'Следит, чтобы продукт работал без ошибок — находит баги раньше пользователей.',
      doesEn: ['Tests features', 'Writes test cases', 'Reports bugs', 'Automates checks'],
      doesRu: ['Тестирует функции', 'Пишет тест-кейсы', 'Заводит баги', 'Автоматизирует проверки'],
      learn: ['Test design', 'Postman', 'SQL', 'Selenium / Cypress', 'Git'],
      fitEn: ['You are detail-oriented', 'You like to break and check', 'You are patient', 'You notice small things'],
      fitRu: ['Внимателен к деталям', 'Любишь ломать и проверять', 'Усидчивый', 'Замечаешь мелочи'],
      notFitEn: ['Routine bores you quickly', 'You dislike finding errors', 'You want to code a lot'],
      notFitRu: ['Быстро надоедает рутина', 'Не любишь искать ошибки', 'Хочешь много кодить'],
      day: [
        { time: '09:00', en: 'Sort out new tasks', ru: 'Разбираю новые задачи' },
        { time: '10:00', en: 'Run through test cases', ru: 'Прохожу тест-кейсы' },
        { time: '12:00', en: 'Report found bugs', ru: 'Завожу найденные баги' },
        { time: '14:00', en: 'Verify the fixes', ru: 'Проверяю исправления' },
        { time: '16:00', en: 'Write autotests', ru: 'Пишу автотесты' },
      ],
      levelEn: 'Junior (easy entry)',
      levelRu: 'Junior (низкий вход)',
      durEn: '3–6 months',
      durRu: '3–6 месяцев',
      salary: '$700 – $2500+',
    },
    {
      id: 'design',
      name: 'UI/UX Designer',
      icon: 'design',
      accent: '#ec4899',
      catEn: 'Design',
      catRu: 'Дизайн',
      descEn: 'Designs interfaces and experience — so the product is pleasant and clear to use.',
      descRu: 'Проектирует интерфейсы и опыт — чтобы продуктом было приятно и понятно пользоваться.',
      doesEn: ['Researches users', 'Draws prototypes', 'Creates the visuals', 'Builds design systems'],
      doesRu: ['Исследует пользователей', 'Рисует прототипы', 'Создаёт визуал', 'Собирает дизайн-системы'],
      learn: ['Figma', 'UX research', 'Prototyping', 'Design systems', 'Typography'],
      fitEn: ['You love aesthetics', 'You think about the user', 'You are detail-oriented', 'You like to research'],
      fitRu: ['Любишь эстетику', 'Думаешь о пользователе', 'Внимателен к деталям', 'Любишь исследовать'],
      notFitEn: ['You hate 10 rounds of edits', "It's boring without code", "You don't like talking to people"],
      notFitRu: ['Не любишь править по 10 раз', 'Скучно без кода', 'Не любишь общаться с людьми'],
      day: [
        { time: '10:00', en: 'Review feedback', ru: 'Смотрю обратную связь' },
        { time: '11:00', en: 'Study the users', ru: 'Изучаю пользователей' },
        { time: '13:00', en: 'Design screens in Figma', ru: 'Рисую макеты в Figma' },
        { time: '15:00', en: 'Discuss with the team', ru: 'Обсуждаю с командой' },
        { time: '16:30', en: 'Refine the prototype', ru: 'Правлю прототип' },
      ],
      levelEn: 'Junior',
      levelRu: 'Junior',
      durEn: '5–10 months',
      durRu: '5–10 месяцев',
      salary: '$700 – $3000+',
    },
    {
      id: 'product',
      name: 'Product Manager',
      icon: 'growth',
      accent: '#8b5cf6',
      catEn: 'Management',
      catRu: 'Менеджмент',
      descEn: 'Decides what to build and why, and leads the product from idea to launch with the team.',
      descRu: 'Решает, что и зачем делать, и ведёт продукт от идеи до запуска вместе с командой.',
      doesEn: ['Defines what to build', 'Talks to users', 'Sets team tasks', 'Watches the metrics'],
      doesRu: ['Определяет, что строить', 'Общается с пользователями', 'Ставит задачи команде', 'Смотрит метрики'],
      learn: ['Agile / Scrum', 'Analytics', 'Jira', 'Roadmaps', 'User research'],
      fitEn: ['You like communicating', 'You see the big picture', 'You can make decisions', 'You like both business and people'],
      fitRu: ['Любишь общаться', 'Видишь картину целиком', 'Умеешь принимать решения', 'Интересны и бизнес, и люди'],
      notFitEn: ['You just want to code', 'You dislike meetings', 'Uncertainty is hard for you'],
      notFitRu: ['Хочешь просто кодить', 'Не любишь встречи', 'Тяжело с неопределённостью'],
      day: [
        { time: '09:30', en: 'Check the metrics', ru: 'Проверяю метрики' },
        { time: '10:30', en: 'Meeting with the team', ru: 'Встреча с командой' },
        { time: '12:00', en: 'Talk to users', ru: 'Общаюсь с пользователями' },
        { time: '14:00', en: 'Write tasks and priorities', ru: 'Пишу задачи и приоритеты' },
        { time: '16:00', en: 'Plan the release', ru: 'Планирую релиз' },
      ],
      levelEn: 'Junior / Middle',
      levelRu: 'Junior / Middle',
      durEn: '6–12 months',
      durRu: '6–12 месяцев',
      salary: '$1000 – $4000+',
    },
    {
      id: 'data',
      name: 'Data Analyst',
      icon: 'chart',
      accent: '#06b6d4',
      catEn: 'Data',
      catRu: 'Данные',
      descEn: 'Turns data into clear conclusions and helps the team make decisions.',
      descRu: 'Превращает данные в понятные выводы и помогает команде принимать решения.',
      doesEn: ['Collects data', 'Builds reports and dashboards', 'Finds patterns', 'Supports decisions'],
      doesRu: ['Собирает данные', 'Строит отчёты и дашборды', 'Ищет закономерности', 'Помогает решениям'],
      learn: ['SQL', 'Excel', 'Python', 'Tableau / Power BI', 'Statistics'],
      fitEn: ['You like numbers', 'You are curious', 'You are detail-oriented', 'You like finding meaning'],
      fitRu: ['Любишь цифры', 'Любопытный', 'Внимателен к деталям', 'Нравится находить смысл'],
      notFitEn: ['You dislike data routine', "It's boring without visuals", "You don't like Excel"],
      notFitRu: ['Не любишь рутину с данными', 'Скучно без визуала', 'Не любишь Excel'],
      day: [
        { time: '09:00', en: 'Look at fresh data', ru: 'Смотрю свежие данные' },
        { time: '10:00', en: 'Write SQL queries', ru: 'Пишу SQL-запросы' },
        { time: '12:00', en: 'Build a dashboard', ru: 'Строю дашборд' },
        { time: '14:00', en: 'Hunt for insights', ru: 'Ищу инсайты' },
        { time: '16:00', en: 'Prepare a report', ru: 'Готовлю отчёт команде' },
      ],
      levelEn: 'Junior',
      levelRu: 'Junior',
      durEn: '4–8 months',
      durRu: '4–8 месяцев',
      salary: '$800 – $3000+',
    },
    {
      id: 'devops',
      name: 'DevOps Engineer',
      icon: 'rocket',
      accent: '#f97316',
      catEn: 'Infrastructure',
      catRu: 'Инфраструктура',
      descEn: 'Sets up how the product is built, deployed and runs reliably in the cloud.',
      descRu: 'Настраивает, как продукт собирается, деплоится и стабильно работает в облаке.',
      doesEn: ['Sets up CI/CD', 'Manages servers', 'Automates deploys', 'Keeps things stable'],
      doesRu: ['Настраивает CI/CD', 'Управляет серверами', 'Автоматизирует деплой', 'Следит за стабильностью'],
      learn: ['Linux', 'Docker', 'Kubernetes', 'CI/CD', 'AWS / Cloud'],
      fitEn: ['You love automation', 'You stay calm under load', 'You like systems thinking', 'You like "just make it work"'],
      fitRu: ['Любишь автоматизацию', 'Спокоен под нагрузкой', 'Любишь системность', 'Нравится «чтобы всё работало»'],
      notFitEn: ['You dislike prod responsibility', "It's boring without visuals", "You don't like being on-call"],
      notFitRu: ['Не любишь ответственность за прод', 'Скучно без визуала', 'Не любишь дежурства'],
      day: [
        { time: '09:00', en: 'Check monitoring', ru: 'Проверяю мониторинг' },
        { time: '10:00', en: 'Set up pipelines', ru: 'Настраиваю пайплайны' },
        { time: '12:00', en: 'Automate tasks', ru: 'Автоматизирую задачи' },
        { time: '14:00', en: 'Handle an incident', ru: 'Разбираю инцидент' },
        { time: '16:00', en: 'Improve infrastructure', ru: 'Улучшаю инфраструктуру' },
      ],
      levelEn: 'Middle',
      levelRu: 'Middle',
      durEn: '8–14 months',
      durRu: '8–14 месяцев',
      salary: '$1200 – $5000+',
    },
  ];

  selectedRoleId = signal<string>('frontend');

  selectedRole = computed(
    () => this.roles.find((r) => r.id === this.selectedRoleId()) ?? this.roles[0]
  );

  selectRole(id: string) {
    this.selectedRoleId.set(id);
  }

  onAreaClick(area: Area) {
    this.selectedRoleId.set(area.role);
    this.scrollToExplorer();
  }

  scrollToExplorer() {
    this.scrollTo('galaxy-explorer');
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
