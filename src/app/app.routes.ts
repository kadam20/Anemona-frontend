import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

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
//   {
//     path: 'about',
//     title: 'About',
//     component: AboutComponent,
//   },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
