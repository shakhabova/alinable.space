import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
