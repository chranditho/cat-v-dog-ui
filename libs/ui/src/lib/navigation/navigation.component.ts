import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'lib-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, CountdownComponent],
  templateUrl: './navigation.component.html',
  styles: `
      :host {
          @apply block;
      }
  `,
})
export class NavigationComponent {
  aiDeadline = signal<Date>(new Date('2024-06-19T22:00:00Z'));
}
