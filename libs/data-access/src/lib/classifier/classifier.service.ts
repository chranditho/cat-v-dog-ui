import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CatVDogClassifierApiService,
  PredictionSchema,
} from '@cat-v-dog-ui/data-access';

@Injectable({
  providedIn: 'root',
})
export class ClassifierService {
  private api = inject(CatVDogClassifierApiService);

  classify(image: File): Observable<PredictionSchema> {
    const formData = new FormData();
    formData.append('file', image);
    return this.api.postImage(formData);
  }
}
