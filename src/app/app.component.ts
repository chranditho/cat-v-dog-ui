import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { NavigationComponent } from '@cat-v-dog-ui/ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgOptimizedImage,
    NavigationComponent,
    AsyncPipe,
    JsonPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
