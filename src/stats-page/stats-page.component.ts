import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '@cat-v-dog-ui/feature';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, StatsComponent],
  template: ` <h1>Stats</h1>
    <div class="flex justify-center">
      <lib-stats />
    </div>`,
  styles: `
      :host {
          @apply block prose mx-auto py-4;
      }
  `,
})
export class StatsPageComponent {}
