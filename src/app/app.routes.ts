import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import { Galaxy } from './components/galaxy/galaxy';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  // Temporarily hidden; keep the page component for later restoration.
  { path: 'estimate', redirectTo: '', pathMatch: 'full' },
  { path: 'galaxy', component: Galaxy },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
