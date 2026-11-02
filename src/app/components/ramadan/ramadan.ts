import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { RamadanService } from '../../services/ramadan.service';

@Component({
  selector: 'app-ramadan',
  imports: [RouterLink],
  templateUrl: './ramadan.html',
  styleUrl: './ramadan.css',
})
export class Ramadan {
  lang = inject(LanguageService);
  ramadan = inject(RamadanService);

  copied = signal(false);

  pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

  copyLink() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    }
  }
}
