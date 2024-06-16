import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>How it works</h1>`,
  styles: `
    :host {
      @apply block prose;
    }
  `,
})
export class HowItWorksComponent {}
