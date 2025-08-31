import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './layout/component/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Header],
  template: `
    <div class="overflow-hidden h-[100vh]">
      <div class="fixed w-full z-50">
        <app-header></app-header>
      </div>
      <div class="mt-[4rem] overflow-auto h-[calc(100vh-4rem)]">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class App {}
