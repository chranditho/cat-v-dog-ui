import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PredictionSchema {
  confidence: number;
  result: 'cat' | 'dog';
}

@Injectable({
  providedIn: 'root',
})
export class CatVDogClassifierApiService {
  http = inject(HttpClient);

  postImage(formData: FormData) {
    return this.http.post<PredictionSchema>(
      'https://catordogapi.amanslab.top/catordog',
      formData
    );
  }
}
