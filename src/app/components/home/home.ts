import { Component, inject } from '@angular/core';
import { ProfileHeader } from '../profile-header/profile-header';
import { SocialLinks } from '../social-links/social-links';
import { ProjectsShowcase } from '../projects-showcase/projects-showcase';
import { LanguageService } from '../../services/language.service';

import { RamadanWidget } from '../ramadan-widget/ramadan-widget';

@Component({
  selector: 'app-home',
  imports: [ProfileHeader, SocialLinks, ProjectsShowcase, RamadanWidget],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  lang = inject(LanguageService);
}
