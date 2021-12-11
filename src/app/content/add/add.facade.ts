import { Injectable } from '@angular/core';
import { finalize, map, switchMap } from 'rxjs';
import { loadingService } from 'src/app/services';
import { StorageService } from 'src/app/services/storage.service';
import { Art, ArtResult } from '../models';
import { MuseumApiService } from '../services';
import { AddArtStorage } from './add.storage.service';

@Injectable()
export class addFacade {
  get lastThreeSearches(): string[] {
    return this.storage.lastThreeSearches;
  }
  constructor(
    private museumApiService: MuseumApiService,
    private loadingService: loadingService,
    private storage: AddArtStorage
  ) {}

  fetchArt(title: string) {
    this.loadingService.start();
    return this.museumApiService
      .getArt(title)
      .pipe(
        switchMap((x: any) => this.museumApiService.getList(x.objectIDs[0]))
      )
      .pipe(
        map<ArtResult, Art>((art) => ({
          title: art.title,
          imageUrl: art.primaryImageSmall,
          artist: art.artistAlphaSort,
          artistBio: art.artistDisplayBio,
          credits: art.creditLine,
        })),
        finalize(() => this.loadingService.stop())
      );
  }
  addToLastSearches(key: string) {
    this.storage.addToLastSearches(key);
  }
  restoreState() {
    console.log('restoring state ...');
  }
}
