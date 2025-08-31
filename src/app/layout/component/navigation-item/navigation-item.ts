import { RouteEnum } from '@/layout/service/layout.service';
import { Component, input, output } from '@angular/core';
import { Button } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-item',
  imports: [Button, Tooltip, RouterLink],
  template: `
    <p-button
            [class.w-full]="isMobile()"
            [text]="true"
            [tooltipPosition]="'bottom'"
            positionTop="12"
            [pTooltip]="isMobile() ? '' : title()"
            [label]="!isMobile() ? '' : title()"
            [styleClass]="
                (isMobile() ? '!w-full space-x-1.5 justify-start' : '!w-12') +
                ' !h-12 text-left whitespace-nowrap'
            "
            [icon]="icon()"
            [routerLink]="route() ?? undefined"
            (click)="saveRoute.emit(route()!)"
            [attr.aria-label]="title()"
            data-cy="sidebar-navigation-item" />
  `
})
export class NavigationItem {
  readonly saveRoute = output<RouteEnum>();

  isMobile = input.required<boolean>();
  title = input.required<string>();
  icon = input.required<string>();
  route = input<RouteEnum>();
}
