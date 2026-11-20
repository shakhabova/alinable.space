import { DESK_PRODUCTS, DeskProduct } from './desk.products';

// Coordinates use the original 960 × 1280 photograph. Keep them when replacing only copy.
type Copy = { en: string; ru: string };
interface DeskItem {
  id: string;
  label: Copy;
  title: Copy;
  description: Copy;
  specs: Copy[];
  points: string;
  x: number;
  y: number;
  // Broad surfaces sit behind the smaller objects placed on them.
  layer?: number;
  product?: DeskProduct;
}
const DESK_LAYOUT: readonly DeskItem[] = [
  { id: 'monitor', label: { en: 'Main monitor', ru: 'Основной монитор' }, title: { en: 'Space to focus', ru: 'Место для фокуса' }, description: { en: 'The centre of my setup: code, projects and everything I am working on. A large screen keeps the details in view without constantly switching windows.', ru: 'Центр рабочего пространства: код, проекты и всё, над чем я работаю. На большом экране удобно держать перед глазами детали и реже переключаться между окнами.' }, specs: [{ en: '27-inch · example', ru: '27 дюймов · пример' }, { en: 'IPS · example', ru: 'IPS · пример' }], points: '499,575 762,551 770,776 501,739', x: 623, y: 652 },
  { id: 'portrait', label: { en: 'Portrait monitor', ru: 'Вертикальный монитор' }, title: { en: 'A different perspective', ru: 'Другой ракурс' }, description: { en: 'An extra screen for documentation, long pages and a little inspiration. The portrait orientation makes room for more context.', ru: 'Дополнительный экран для документации, длинных страниц и немного вдохновения. Вертикальный формат позволяет видеть больше контекста.' }, specs: [{ en: '24-inch · example', ru: '24 дюйма · пример' }, { en: 'Portrait orientation', ru: 'Вертикальная ориентация' }], points: '764,436 945,379 959,411 959,861 771,809', x: 855, y: 577 },
  { id: 'laptop', label: { en: 'Laptop', ru: 'Ноутбук' }, title: { en: 'Everything starts here', ru: 'Всё начинается здесь' }, description: { en: 'The portable part of my workspace. At the desk it joins the monitors; away from home it takes my projects with me.', ru: 'Мобильная часть рабочего пространства. За столом к нему подключаются мониторы, а вне дома он помогает брать проекты с собой.' }, specs: [{ en: '16 GB RAM · example', ru: '16 ГБ памяти · пример' }, { en: '512 GB SSD · example', ru: 'SSD 512 ГБ · пример' }], points: '361,636 497,628 503,723 483,806 342,784 360,722', x: 426, y: 685 },
  { id: 'keyboard', label: { en: 'Keyboard', ru: 'Клавиатура' }, title: { en: 'A favourite daily ritual', ru: 'Любимый ежедневный ритуал' }, description: { en: 'A good keyboard is about the feel as much as the look. This is the daily driver; a few more from the collection are below.', ru: 'Хорошая клавиатура — это и внешний вид, и ощущения от печати. Эта стоит на столе каждый день, а ещё несколько из коллекции — ниже.' }, specs: [{ en: 'Mechanical · example', ru: 'Механическая · пример' }, { en: '75% layout · example', ru: 'Формат 75% · пример' }], points: '492,788 651,806 671,832 630,849 468,818', x: 577, y: 815 },
  { id: 'mouse', label: { en: 'Mouse', ru: 'Мышь' }, title: { en: 'Small, but essential', ru: 'Маленькая, но важная' }, description: { en: 'A comfortable mouse for moving between design, code and everyday tasks. A simple detail that makes long sessions easier.', ru: 'Удобная мышь для работы с дизайном, кодом и повседневными задачами. Простая деталь, с которой долгие рабочие сессии становятся комфортнее.' }, specs: [{ en: 'Wireless · example', ru: 'Беспроводная · пример' }], points: '683,831 716,833 743,851 722,869 683,858', x: 710, y: 848 },
  { id: 'cat', label: { en: 'Chief of comfort', ru: 'Директор по уюту' }, title: { en: 'The most important teammate', ru: 'Самый важный коллега' }, description: { en: 'Keeps an eye on the work, tests the chair and reminds me to take breaks. The one part of this setup that cannot be replaced.', ru: 'Следит за работой, тестирует кресло и напоминает делать перерывы. Незаменимая часть рабочего пространства.' }, specs: [{ en: 'Powered by naps', ru: 'Работает на дневном сне' }, { en: '100% comfort', ru: '100% уюта' }], points: '162,1027 227,981 236,912 301,914 337,948 362,982 345,1057 340,1115 379,1171 481,1181 485,1213 445,1244 349,1217 264,1168 223,1119 210,1057', x: 282, y: 1026 },
  {
    id: 'desk', layer: -2,
    label: { en: 'Desk', ru: 'Стол' },
    title: { en: 'Room for everything', ru: 'Основа рабочего пространства' },
    description: { en: 'A dark desktop brings the whole setup together, with room for screens, accessories and a book for a break. The drawer unit underneath keeps everyday essentials close at hand.', ru: 'Тёмная столешница объединяет весь сетап: на ней хватает места для экранов, аксессуаров и книги на время перерыва. Тумба под столом хранит нужные мелочи под рукой.' },
    specs: [{ en: 'Model to be added', ru: 'Модель добавлю позже' }],
    points: '299,797 346,784 497,789 768,819 959,861 959,906 850,972 850,1280 578,1280 578,919 301,849', x: 831, y: 942,
  },
  {
    id: 'microphone',
    label: { en: 'Microphone', ru: 'Микрофон' },
    title: { en: 'A voice for every call', ru: 'Для разговоров и созвонов' },
    description: { en: 'A dedicated microphone next to the laptop for work calls and conversations. The model and details will be added later.', ru: 'Отдельный микрофон рядом с ноутбуком для рабочих созвонов и общения. Модель и подробности добавлю позже.' },
    specs: [{ en: 'Model to be added', ru: 'Модель добавлю позже' }],
    points: '283,698 300,693 314,703 316,741 329,750 329,775 313,799 282,796 273,782 275,753 285,746', x: 298, y: 731,
  },
  {
    id: 'headphones',
    label: { en: 'Headphones', ru: 'Наушники' },
    title: { en: 'My own little soundscape', ru: 'Свой маленький звуковой мир' },
    description: { en: 'For music, calls and moments when I want to focus. They live within reach, just beside the laptop.', ru: 'Для музыки, созвонов и моментов, когда хочется сосредоточиться. Лежат под рукой, рядом с ноутбуком.' },
    specs: [{ en: 'Model to be added', ru: 'Модель добавлю позже' }],
    points: '332,794 349,785 371,790 380,805 397,806 400,822 380,830 343,833 328,821', x: 357, y: 809,
  },
  {
    id: 'desk-mat', layer: -1,
    label: { en: 'Desk mat', ru: 'Коврик на столе' },
    title: { en: 'One space for the essentials', ru: 'Общее место для главного' },
    description: { en: 'A large mat under the keyboard and mouse ties the work area together and protects the desktop.', ru: 'Большой коврик под клавиатурой и мышью объединяет рабочую зону и защищает поверхность стола.' },
    specs: [{ en: 'Size to be added', ru: 'Размер добавлю позже' }],
    points: '405,801 637,808 807,847 704,912 368,845', x: 655, y: 882,
  },
  {
    id: 'wrist-rest',
    label: { en: 'Wrist rest', ru: 'Подставка под запястья' },
    title: { en: 'A little everyday comfort', ru: 'Немного ежедневного комфорта' },
    description: { en: 'The wrist rest sits in front of the keyboard: a small detail that makes the desk feel more comfortable.', ru: 'Подставка перед клавиатурой — небольшая деталь, с которой за столом комфортнее проводить время.' },
    specs: [{ en: 'Model to be added', ru: 'Модель добавлю позже' }],
    points: '447,817 594,844 590,856 569,865 426,837 427,827', x: 479, y: 837,
  },
  {
    id: 'kindle',
    label: { en: 'Kindle', ru: 'Читалка Kindle' },
    title: { en: 'A different kind of screen time', ru: 'Перерыв на несколько страниц' },
    description: { en: 'A Kindle on the edge of the desk, ready for a reading break between tasks. I will add the exact model and my favourite books later.', ru: 'Kindle на краю стола, чтобы между задачами переключиться на чтение. Точную модель и любимые книги добавлю позже.' },
    specs: [{ en: 'Kindle · model to be added', ru: 'Kindle · модель добавлю позже' }],
    points: '771,870 866,893 868,909 815,934 715,913 714,903', x: 792, y: 902,
  },
];

export const DESK_ITEMS: readonly DeskItem[] = DESK_LAYOUT.map(item => {
  const product = DESK_PRODUCTS[item.id];
  return product ? { ...item, title: product.name, description: product.description, specs: product.specs, product } : item;
});

interface Keyboard {
  id: string;
  name: Copy;
  role: Copy;
  description: Copy;
  specs: Copy[];
  // Add a public asset path here when the real photograph is available.
  photo: string | null;
  theme: string;
  url?: string;
  linkLabel?: Copy;
  photoFit?: 'cover' | 'contain';
  photoPosition?: string;
}
export const KEYBOARDS: readonly Keyboard[] = [
  { id: 'daily', ...DESK_PRODUCTS['keyboard'], role: { en: '01 / DAILY DRIVER', ru: '01 / ОСНОВНАЯ' }, theme: 'graphite', photoFit: 'cover' },
  {
    id: 'ajazz', name: { en: 'AJAZZ AK820 Pro', ru: 'AJAZZ AK820 Pro' },
    role: { en: '02 / COMPACT MECHANICAL', ru: '02 / КОМПАКТНАЯ МЕХАНИКА' },
    description: {
      en: 'A 75% mechanical keyboard with a colour TFT screen, RGB lighting and a metal control knob. Connections: Bluetooth, 2.4 GHz and USB-C.',
      ru: 'Механическая клавиатура формата 75% с цветным TFT-экраном, RGB-подсветкой и металлическим регулятором. Подключение: Bluetooth, 2,4 ГГц и USB-C.',
    },
    specs: [{ en: '75% layout', ru: 'Формат 75%' }, { en: 'TFT screen', ru: 'TFT-экран' }, { en: 'Bluetooth · 2.4 GHz · USB-C', ru: 'Bluetooth · 2,4 ГГц · USB-C' }, { en: 'RGB lighting', ru: 'RGB-подсветка' }],
    photo: '/desk-products/ajazz-ak820-pro.jpg', theme: 'lilac', photoFit: 'cover', photoPosition: 'center 28%',
    url: 'https://www.trendyol.com/ajazz/ak820-pro-mekanik-oyun-klavyesi-3-modlu-tft-renkli-ekran-ve-cnc-dugmeli-81-tus-rgb-aydinlatma-p-833535948',
  },
  {
    id: 'craft', name: { en: 'Logitech Craft', ru: 'Logitech Craft' },
    role: { en: '03 / CREATIVE CONTROL', ru: '03 / УПРАВЛЕНИЕ ДЕТАЛЯМИ' },
    description: {
      en: 'A full-size wireless keyboard with a Crown control dial and smart backlighting. Connections: Bluetooth and a Unifying receiver.',
      ru: 'Полноразмерная беспроводная клавиатура с управляющим диском Crown и умной подсветкой. Подключение: Bluetooth и приёмник Unifying.',
    },
    specs: [{ en: 'Full-size layout', ru: 'Полноразмерная' }, { en: 'Crown control dial', ru: 'Управляющий диск Crown' }, { en: 'Bluetooth · Unifying', ru: 'Bluetooth · Unifying' }, { en: 'Smart backlighting', ru: 'Умная подсветка' }],
    photo: '/desk-products/logitech-craft.png', theme: 'graphite', photoFit: 'contain',
    url: 'https://hard.rozetka.com.ua/ua/373810764/p373810764/',
    linkLabel: { en: 'Product on Rozetka', ru: 'Товар на Rozetka' },
  },
];
