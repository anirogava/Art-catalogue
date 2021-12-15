import { Component, OnInit } from '@angular/core';
import { finalize, forkJoin, map, Observable, switchMap } from 'rxjs';
import { loadingService } from 'src/app/services';
import { FireApiService } from 'src/app/services/fire-api.service';
import { ArtListItem, ArtResult, ArtWithId } from '../models';
import { MuseumApiService } from '../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  art$: Observable<ArtListItem[]> | undefined;

  constructor(
    private fireApiService: FireApiService,
    private museumApiService: MuseumApiService,
    private loadingService: loadingService
  ) {}

  private mapArtData(data: ArtWithId[]) {
    return data.map((d) =>
      this.museumApiService.getArtByObjectId(d.objectIds).pipe(
        map<ArtResult, ArtListItem>((art) => ({
          data: d,
          art,
        }))
      )
    );
  }

  ngOnInit() {
    this.loadingService.start();
    this.art$ = this.fireApiService.getArts().pipe(
      switchMap((data) => forkJoin(this.mapArtData(data))),
      finalize(() => this.loadingService.stop())
    );
  }
}
