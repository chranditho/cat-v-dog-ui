import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styles: `
    :host {
      @apply block prose p-4;
    }
  `,
})
export class HowItWorksComponent {}
