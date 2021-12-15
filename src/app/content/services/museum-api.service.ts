import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArtResult } from '../models';

@Injectable()
export class MuseumApiService {
  constructor(private http: HttpClient) {}
  
  getArt(title: string) {
    return this.http.get(`${environment.museumApi}=${title}`);
  }
  getList(id: number) {
    return this.http.get<ArtResult>(`${environment.base_url}objects/${id}`);
  }
  getArtByObjectId(objectIds: number): Observable<ArtResult> {
    return this.http.get<ArtResult>(
      `${environment.base_url}objects/${objectIds}`
    );
  }
}
