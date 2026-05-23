import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLang = signal<'EN' | 'RU'>('EN');

  setLanguage(lang: 'EN' | 'RU') {
    this.currentLang.set(lang);
    localStorage.setItem('portfolio-lang', lang);
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'EN' ? 'RU' : 'EN');
  }

  constructor() {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang === 'EN' || savedLang === 'RU') {
      this.currentLang.set(savedLang);
    }
  }

  // Translation helper
  t(en: string, ru: string): string {
    return this.currentLang() === 'EN' ? en : ru;
  }
}
