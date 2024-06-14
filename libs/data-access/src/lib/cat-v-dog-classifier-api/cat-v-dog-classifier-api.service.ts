import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PredictionSchema {
  confidence: number;
  result: 'cat' | 'dog';
}

@Injectable({
  providedIn: 'root',
})
export class CatVDogClassifierApiService {
  http = inject(HttpClient);

  getPrediction(image: File): Observable<PredictionSchema> {
    const formData = new FormData();
    formData.append('file', image);
    return this.http.post<PredictionSchema>(
      'https://catordogapi.amanslab.top/catordog',
      formData
    );
  }
}
