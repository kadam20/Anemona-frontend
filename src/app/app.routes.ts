import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  {
    path: '',
    title: 'Kezdőlap',
    component: Home,
  },
  {
    path: 'blog',
    title: 'Blog',
    component: Blog,
  },
  //   {
  //     path: 'shop',
  //     title: 'Shop',
  //     component: ShopComponent,
  //   },
  //   {
  //     path: 'visit',
  //     title: 'Visit',
  //     component: VisitComponent,
  //   },
  {
    path: 'contact',
    title: 'Kontakt',
    component: Contact,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
