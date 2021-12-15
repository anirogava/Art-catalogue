import { Injectable } from '@angular/core';
import { finalize, map, switchMap } from 'rxjs';
import { loadingService } from 'src/app/services';
import { EventBusService } from 'src/app/services/event-bus.service';
import { FireApiService } from 'src/app/services/fire-api.service';
import { FORM_RESET_EVENT_KEY } from '../content.model';
import { Art, ArtBody, ArtResult } from '../models';
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
    private storage: AddArtStorage,
    private fireApiService: FireApiService,
    private eventBus: EventBusService
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
          objectID: art.objectID,
        })),
        finalize(() => {
          this.loadingService.stop();
          this.eventBus.emit(FORM_RESET_EVENT_KEY)
        })
      );
  }
  addToLastSearches(key: string) {
    this.storage.addToLastSearches(key);
  }
  restoreState() {
    this.storage.restoreState();
  }
  submit(body: ArtBody) {
    this.fireApiService.addArt(body).subscribe((x) => console.log(x));
  }
}
