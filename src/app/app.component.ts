import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { FooterComponent, NavigationComponent } from '@cat-v-dog-ui/ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgOptimizedImage,
    NavigationComponent,
    AsyncPipe,
    JsonPipe,
    FooterComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        @apply flex flex-col justify-between min-h-dvh;
      }
    `,
  ],
})
export class AppComponent {}
