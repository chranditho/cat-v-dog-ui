import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-toast',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="toast">
    <div class="alert alert-info">
      <span>{{ message }}</span>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ToastComponent {
  @Input({ required: true }) message = 'please provide a message';
}
