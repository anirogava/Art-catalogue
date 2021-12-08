import { Injectable } from '@angular/core';
import {
  concatMap,
  first,
  map,
  Observable,
  observable,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { MuseumApiService } from '../services';

@Injectable()
export class addFacade {
  constructor(private museumApiService: MuseumApiService) {}

  fetchArt(title: string) {
    return this.museumApiService
      .getArt(title)
      .pipe(
        switchMap((x: any) => this.museumApiService.getList(x.objectIDs[0]))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
