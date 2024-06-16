import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Stat {
  title: string;
  value: string;
  description?: string;
}

@Component({
  selector: 'lib-stat',
  standalone: true,
  imports: [CommonModule],
  template: ` <div
    [ngClass]="primary() ? 'text-primary' : ''"
    class="stats shadow w-full h-full"
  >
    <div class="stat border rounded-3xl">
      <div class="stat-title">{{ stat().title }}</div>
      <div class="stat-value">{{ stat().value }}</div>
      @if (stat().description) {
      <div class="stat-desc">{{ stat().description }}</div>
      }
    </div>
  </div>`,
  styles: `
      :host {
          @apply block;
      }
  `,
})
export class StatComponent {
  stat = input<Stat>({
    title: 'Total Page Views',
    value: '89400',
  });
  primary = input<boolean>(false);
}
