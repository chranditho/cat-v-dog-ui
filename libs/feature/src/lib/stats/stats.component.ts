import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '@cat-v-dog-ui/ui';

@Component({
  selector: 'lib-stats',
  standalone: true,
  imports: [CommonModule, StatComponent],
  templateUrl: './stats.component.html',
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class StatsComponent {}
