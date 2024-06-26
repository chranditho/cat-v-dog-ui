import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '@cat-v-dog-ui/ui';

@Component({
  selector: 'lib-how-it-works',
  standalone: true,
  imports: [CommonModule, StatComponent],
  templateUrl: './how-it-works.component.html',
  styles: `
    :host {
      @apply block prose p-4;
    }
  `,
})
export class HowItWorksComponent {}
