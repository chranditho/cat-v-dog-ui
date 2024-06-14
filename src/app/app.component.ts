import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { NavigationComponent, ToastComponent } from '@cat-v-dog-ui/ui';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NgOptimizedImage,
    NavigationComponent,
    ToastComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  toastVisible = false;

  http = inject(HttpClient);

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
      // todo: move http to a service in libs/data-access
      this.http
        .post('https://catordogapi.amanslab.top/catordog', formData)
        .subscribe((res) => {
          console.log(res);
          this.showToast();
        });
    }
  }

  private showToast() {
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 5000);
  }
}
