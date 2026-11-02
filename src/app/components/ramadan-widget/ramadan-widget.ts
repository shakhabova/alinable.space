import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { RamadanService } from '../../services/ramadan.service';

@Component({
  selector: 'app-ramadan-widget',
  imports: [RouterLink],
  templateUrl: './ramadan-widget.html',
  styleUrl: './ramadan-widget.css',
})
export class RamadanWidget {
  lang = inject(LanguageService);
  ramadan = inject(RamadanService);

  pad(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
