import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class MuseumApiService {
  [x: string]: any;
  constructor(private http: HttpClient) {}
  getArt(title: string) {
    return this.http.get(`${environment.museumApi}=${title}`);
  }
  getList(id: number) {
    return this.http.get(`${environment.base_urlt}objects/${id}`);
  }
}
