import { LayoutService, RouteEnum } from '@/layout/service/layout.service';
import { LocalstorageService } from '@/layout/service/localstorage.service';
import { Component, inject } from '@angular/core';
import { Button } from 'primeng/button';
import { NavigationItem } from '../navigation-item/navigation-item';
import { ExternalNavigation } from '../external-navigation/external-navigation';
import { Popover} from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [Button, NavigationItem, ExternalNavigation, Popover],
  templateUrl: './header.html',
})
export class Header {
  localStorageService = inject(LocalstorageService);
  layoutService = inject(LayoutService);

  isDarkMode = this.layoutService.isDarkMode;

  internalRoutes = [
    {
      icon: 'pi pi-home',
      route: RouteEnum.HOME,
      label: 'Kezdőlap',
    },
    {
      icon: 'pi pi-sparkles',
      route: RouteEnum.BLOG,
      label: 'Tekintsd meg a Blogot',
    },
    {
      icon: 'pi pi-shopping-bag',
      route: RouteEnum.SHOP,
      label: 'Anemona Termékek',
    },
    {
      icon: 'pi pi-compass',
      route: RouteEnum.VISIT,
      label: 'Látogasson el Hozzánk',
    },
    {
      icon: 'pi pi-user',
      route: RouteEnum.ABOUT,
      label: 'Rólunk',
    },
  ];

  toggleDarkMode() {
    this.layoutService.toggleDarkMode();
  }

  saveRoute(route: RouteEnum) {
    this.layoutService.saveRoute(route);
  }
}
