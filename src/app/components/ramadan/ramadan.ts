import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { RamadanService } from '../../services/ramadan.service';
import { RamadanShareCard } from '../ramadan-share-card/ramadan-share-card';

@Component({
  selector: 'app-ramadan',
  imports: [RouterLink, RamadanShareCard],
  templateUrl: './ramadan.html',
  styleUrl: './ramadan.css',
})
export class Ramadan {
  lang = inject(LanguageService);
  ramadan = inject(RamadanService);

  pad(num: number): string {
    return num.toString().padStart(2, '0');
  }

}
