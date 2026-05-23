import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects-showcase',
  imports: [],
  templateUrl: './projects-showcase.html',
  styleUrl: './projects-showcase.css',
})
export class ProjectsShowcase {
  lang = inject(LanguageService);
}
