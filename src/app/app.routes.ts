import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: Home,
  },
  //   {
  //     path: 'blog',
  //     title: 'Blog',
  //     component: BlogComponent,
  //   },
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
    title: 'Contact',
    component: Contact,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
