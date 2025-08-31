import { Injectable, inject, signal } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';

export enum RouteEnum {
  HOME = '/',
  VISIT = '/visit',
  SHOP = '/shop',
  BLOG = '/blog',
  CONTACT = '/contact',
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  localStorageService = inject(LocalstorageService);
  currentRoute = signal<RouteEnum>(RouteEnum.HOME);
  isDarkMode = signal<boolean>(false);

  router: Router = inject(Router);

  constructor() {
    this.getTheme();
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    const isDark = element?.classList.toggle('dark');

    this.isDarkMode.set(isDark!);
    this.localStorageService.setItem('theme', isDark ? 'dark' : 'light');
  }

  getTheme() {
    const theme = this.localStorageService.getItem('theme');
    const element = document.querySelector('html');

    // If the theme is light, set the theme to light.
    if (theme === 'light') {
      this.isDarkMode.set(false);
      element?.classList.remove('dark');
      return;
    } else if (theme === 'dark') {
      element?.classList.add('dark');
      this.isDarkMode.set(true);
      return;
    }

    // If no theme is found in local storage, set the theme to dark.
    this.localStorageService.setItem('theme', 'dark');
    this.isDarkMode.set(true);
  }

  getCurrentRoute() {
    const currentRoute = this.localStorageService.getItem('currentRoute');
    if (currentRoute) {
      this.currentRoute.set(currentRoute as RouteEnum);
      this.router.navigate([`/${currentRoute}`]);
    }
  }

  saveRoute(route: RouteEnum) {
    this.currentRoute.set(route);
    this.localStorageService.setItem('currentRoute', route);
  }
}
