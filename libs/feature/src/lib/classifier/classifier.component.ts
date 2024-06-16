import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifierService, PredictionSchema } from '@cat-v-dog-ui/data-access';
import { Observable } from 'rxjs';
import { NavigationComponent } from '@cat-v-dog-ui/ui';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-classifier',
  standalone: true,
  imports: [CommonModule, NavigationComponent, RouterOutlet],
  templateUrl: './classifier.component.html',
  styles: `
      :host {
          @apply block;
      }
  `,
})
export class ClassifierComponent {
  classifier = inject(ClassifierService);

  prediction$: Observable<PredictionSchema> | null = null;

  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => (this.imageUrl = reader.result);
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload() {
    if (this.selectedFile) {
      this.prediction$ = this.classifier.classify(this.selectedFile);
      this.selectedFile = null;
    }
  }
}
