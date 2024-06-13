import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
      const formData = new FormData();
      formData.append('image', this.selectedFile);
    }
  }
}
