import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div class="inverse h-[4rem] flex items-center justify-center text-center p-5">
      <p class="text-xs">
        Szerzői jog Anemona-kert © 2025 Az oldalon megjelenő tartalmak másolása kizárólag a szerző
        engedélyével történhet.
      </p>
    </div>
  `,
  styles: ``,
})
export class Footer {}
