import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { NavigationComponent, ToastComponent } from '@cat-v-dog-ui/ui';
import {
  CatVDogClassifierApiService,
  PredictionSchema,
} from '@cat-v-dog-ui/data-access';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgOptimizedImage,
    NavigationComponent,
    ToastComponent,
    AsyncPipe,
    JsonPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  api = inject(CatVDogClassifierApiService);

  prediction$: Observable<PredictionSchema> | null = null;

  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload() {
    if (this.selectedFile) {
      this.prediction$ = this.api.getPrediction(this.selectedFile);
      this.selectedFile = null;
    }
  }
}
