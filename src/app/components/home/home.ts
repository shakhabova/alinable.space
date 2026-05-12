import { Component } from '@angular/core';
import { ProfileHeader } from '../profile-header/profile-header';
import { SocialLinks } from '../social-links/social-links';
import { ProjectsShowcase } from '../projects-showcase/projects-showcase';

@Component({
  selector: 'app-home',
  imports: [ProfileHeader, SocialLinks, ProjectsShowcase],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
