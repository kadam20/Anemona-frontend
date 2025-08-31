import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-external-navigation',
  imports: [Tooltip],
  template: `
    <div class="flex gap-10">
      @for (route of externalRoutes; track route) {
        <a
          [href]="route.route"
          pButton
          target="_blank"
          rel="noopener noreferrer"
          class="!w-12 !h-12 flex items-center justify-center"
          text="true"
          [pTooltip]="route.label"
          tooltipPosition="bottom"
        >
          <i [class]="route.icon"></i>
        </a>
      }
    </div>
  `,
})
export class ExternalNavigation {
  externalRoutes = [
    {
      icon: 'pi pi-instagram',
      route: 'https://www.instagram.com/anemona_kert/',
      label: 'Anemona Instagram',
    },
    {
      icon: 'pi pi-facebook',
      route: 'https://www.facebook.com/anemonakert',
      label: 'Anemona Facebook',
    },
  ];
}
