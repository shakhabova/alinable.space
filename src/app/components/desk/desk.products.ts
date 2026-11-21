// Product details come from the linked listings and manufacturer support pages.
export interface DeskProduct {
  name: { en: string; ru: string };
  description: { en: string; ru: string };
  specs: { en: string; ru: string }[];
  photo: string;
  url: string;
  linkLabel?: { en: string; ru: string };
}

const SAMSUNG_MONITOR: DeskProduct = {
  name: { en: 'Samsung ViewFinity S6', ru: 'Samsung ViewFinity S6' },
  description: {
    en: 'A 27-inch IPS monitor with QHD resolution, a 75 Hz refresh rate and a rotating stand.',
    ru: '27-дюймовый IPS-монитор с QHD-разрешением, частотой обновления 75 Гц и поворотной подставкой.',
  },
  specs: [{ en: '27-inch · IPS', ru: '27 дюймов · IPS' }, { en: 'QHD · 2560 × 1440', ru: 'QHD · 2560 × 1440' }, { en: '75 Hz', ru: '75 Гц' }, { en: 'LS27B610EQUXUF', ru: 'LS27B610EQUXUF' }],
  photo: '/desk-products/samsung-viewfinity-s6.jpg',
  url: 'https://www.trendyol.com/samsung/viewfinity-s6-ls27b610equxuf-27-75hz-5ms-qhd-freesync-pivot-ips-monitor-samsung-turkiye-garantili-p-378112323',
};

export const DESK_PRODUCTS: Readonly<Record<string, DeskProduct>> = {
  desk: {
    name: { en: 'IKEA LAGKAPTEN / ALEX', ru: 'IKEA LAGKAPTEN / ALEX' },
    description: {
      en: 'A desk assembled from an IKEA LAGKAPTEN tabletop and ALEX drawer units.',
      ru: 'Рабочий стол из столешницы IKEA LAGKAPTEN и тумб ALEX.',
    },
    specs: [{ en: 'LAGKAPTEN tabletop', ru: 'Столешница LAGKAPTEN' }, { en: 'ALEX drawer units', ru: 'Тумбы ALEX' }, { en: 'Modular setup', ru: 'Сборная конструкция' }],
    photo: '/desk-products/ikea-lagkapten-alex.jpg',
    url: 'https://ikea-39.ru/catalog/item/39584930',
  },
  monitor: SAMSUNG_MONITOR,
  laptop: {
    name: { en: 'Lenovo Yoga Slim 7 14ARE05', ru: 'Lenovo Yoga Slim 7 14ARE05' },
    description: {
      en: 'A 14-inch laptop with a Full HD IPS display and an AMD Ryzen processor.',
      ru: '14-дюймовый ноутбук с Full HD IPS-экраном и процессором AMD Ryzen.',
    },
    // Only shared model specifications: the exact CPU, RAM and SSD capacity are not confirmed.
    specs: [{ en: '14-inch · IPS', ru: '14 дюймов · IPS' }, { en: 'Full HD · 1920 × 1080', ru: 'Full HD · 1920 × 1080' }, { en: 'AMD Ryzen', ru: 'AMD Ryzen' }],
    // Product photo: https://www.digitec.ch/en/s1/product/lenovo-yoga-slim-7-14are05-14-512-gb-8-gb-ch-amd-ryzen-5-4500u-notebooks-13088789
    photo: '/desk-products/lenovo-yoga-slim-7-14are05.jpg',
    url: 'https://psref.lenovo.com/syspool/Sys/PDF/Yoga/Yoga_Slim_7_14ARE05/Yoga_Slim_7_14ARE05_Spec.PDF',
    linkLabel: { en: 'Specifications · Lenovo', ru: 'Характеристики · Lenovo' },
  },
  portrait: {
    ...SAMSUNG_MONITOR,
    description: {
      en: 'A second 27-inch Samsung ViewFinity S6 IPS monitor with QHD resolution and a 75 Hz refresh rate, mounted vertically.',
      ru: 'Второй 27-дюймовый IPS-монитор Samsung ViewFinity S6 с QHD-разрешением и частотой 75 Гц. Установлен вертикально.',
    },
    specs: [...SAMSUNG_MONITOR.specs, { en: 'Portrait orientation', ru: 'Портретная ориентация' }],
  },
  kindle: {
    name: { en: 'Amazon Kindle Paperwhite 5', ru: 'Amazon Kindle Paperwhite 5' },
    description: {
      en: 'An 11th-generation Kindle Paperwhite e-reader with a 6.8-inch screen, adjustable lighting and USB-C charging.',
      ru: 'Электронная книга Kindle Paperwhite 11-го поколения с экраном 6,8 дюйма, регулируемой подсветкой и зарядкой USB-C.',
    },
    specs: [{ en: '6.8-inch screen', ru: 'Экран 6,8 дюйма' }, { en: 'Adjustable light', ru: 'Регулируемая подсветка' }, { en: 'USB-C', ru: 'USB-C' }],
    photo: '/desk-products/kindle-paperwhite-5.jpg',
    url: 'https://digprjsurvey.amazon.com/csad/help/node/Tnx3eeuXDtZL0Q91ms',
    linkLabel: { en: 'Model information · Amazon', ru: 'О модели · Amazon' },
  },
  headphones: {
    name: { en: 'Marshall Major III', ru: 'Marshall Major III' },
    description: {
      en: 'On-ear headphones with square ear cushions, a foldable design and a 3.5 mm connector.',
      ru: 'Накладные наушники с квадратными амбушюрами, складной конструкцией и разъёмом 3,5 мм.',
    },
    specs: [{ en: 'On-ear', ru: 'Накладные' }, { en: 'Foldable design', ru: 'Складная конструкция' }, { en: '3.5 mm', ru: '3,5 мм' }],
    photo: '/desk-products/marshall-major-iii.jpg',
    url: 'https://www.marshall.com/us/en/support/headphones/support-for-major-iii',
    linkLabel: { en: 'Model information · Marshall', ru: 'О модели · Marshall' },
  },
  microphone: {
    name: { en: 'Havit Gamenote GK60 Pro', ru: 'Havit Gamenote GK60 Pro' },
    description: {
      en: 'A USB microphone with RGB lighting, a cardioid pickup pattern and 48 kHz / 24-bit recording.',
      ru: 'USB-микрофон с RGB-подсветкой, кардиоидной направленностью и записью 48 кГц / 24 бит.',
    },
    specs: [{ en: 'USB', ru: 'USB' }, { en: 'RGB lighting', ru: 'RGB-подсветка' }, { en: '48 kHz / 24 bit', ru: '48 кГц / 24 бит' }],
    photo: '/desk-products/havit-gk60-pro.jpg',
    url: 'https://www.trendyol.com/havit/gamenote-gk60-pro-rgb-profesyonel-oyuncu-ve-yayinci-mikrofonu-rgb-standli-usb-mikrofon-p-940085919?boutiqueId=689770&merchantId=968',
  },
  mouse: {
    name: { en: 'GravaStar Mercury M2', ru: 'GravaStar Mercury M2' },
    description: {
      en: 'A wireless optical mouse with an open-frame body, RGB lighting and sensitivity up to 26,000 DPI.',
      ru: 'Беспроводная оптическая мышь с открытым корпусом, RGB-подсветкой и чувствительностью до 26 000 DPI.',
    },
    specs: [{ en: 'Wireless', ru: 'Беспроводная' }, { en: '26,000 DPI', ru: '26 000 DPI' }, { en: 'RGB lighting', ru: 'RGB-подсветка' }],
    photo: '/desk-products/gravastar-mercury-m2.jpg',
    url: 'https://www.trendyol.com/gravastar/mercury-m2-rgb-26k-dpi-optik-gaming-mouse-kablosuz-programlanabilir-5-tuslu-siyah-p-849768371?boutiqueId=61&merchantId=107979',
  },
  'desk-mat': {
    name: { en: 'GravaStar Gaming Mouse Pad', ru: 'GravaStar Gaming Mouse Pad' },
    description: {
      en: 'An 80 × 40 cm desk mat, 3 mm thick, with a non-slip base and a water-resistant surface.',
      ru: 'Коврик размером 80 × 40 см и толщиной 3 мм с нескользящей основой и влагостойкой поверхностью.',
    },
    specs: [{ en: '80 × 40 cm', ru: '80 × 40 см' }, { en: '3 mm thick', ru: 'Толщина 3 мм' }, { en: 'Non-slip base', ru: 'Нескользящая основа' }],
    photo: '/desk-products/gravastar-desk-mat.jpg',
    url: 'https://www.trendyol.com/gravastar/gaming-mouse-pad-80x40cm-kaymaz-taban-su-gecirmez-oyuncu-mousepad-siyah-p-938006446?boutiqueId=61&merchantId=107979',
  },
  'wrist-rest': {
    name: { en: 'GravaStar Keyboard Wrist Rest', ru: 'GravaStar Keyboard Wrist Rest' },
    description: {
      en: 'A keyboard wrist rest with a PU leather surface, an ABS base and a non-slip underside.',
      ru: 'Подставка под запястья для клавиатуры с поверхностью из PU-кожи, ABS-основой и нескользящим основанием.',
    },
    specs: [{ en: 'PU leather', ru: 'PU-кожа' }, { en: 'ABS base', ru: 'ABS-основа' }, { en: 'Non-slip base', ru: 'Нескользящая основа' }],
    photo: '/desk-products/gravastar-wrist-rest.jpg',
    url: 'https://www.trendyol.com/gravastar/klavye-bilek-destegi-kaymaz-taban-bilek-destek-pedi-siyah-p-938016287?boutiqueId=61&merchantId=107979',
  },
  keyboard: {
    name: { en: 'GravaStar Mercury K1 Pro', ru: 'GravaStar Mercury K1 Pro' },
    description: {
      en: 'A wireless mechanical keyboard with an aluminium frame, RGB lighting and an English Q layout.',
      ru: 'Беспроводная механическая клавиатура с алюминиевой рамой, RGB-подсветкой и английской Q-раскладкой.',
    },
    specs: [{ en: 'Mechanical', ru: 'Механическая' }, { en: 'Wireless', ru: 'Беспроводная' }, { en: 'Aluminium frame', ru: 'Алюминиевая рама' }, { en: 'RGB lighting', ru: 'RGB-подсветка' }],
    photo: '/desk-products/gravastar-mercury-k1-pro.jpg',
    url: 'https://www.trendyol.com/gravastar/gravastar-mercury-k1-pro-rgb-kablosuz-mekanik-gaming-klavye-aluminyum-cerceveli-ingilizce-q-siyah-p-904688984?boutiqueId=61&merchantId=107979',
  },
};
