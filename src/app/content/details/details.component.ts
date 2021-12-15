import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Observable, tap } from 'rxjs';
import { loadingService } from 'src/app/services';
import { FireApiService } from 'src/app/services/fire-api.service';
import { ArtBody, ArtResult } from '../models';
import { MuseumApiService } from '../services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  storeData$: Observable<ArtBody | undefined> | undefined;
  artData$: Observable<ArtResult> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fireApiService: FireApiService,
    private museumApiService: MuseumApiService,
    private router: Router,
    private loadingService: loadingService
  ) {}

  private initArtDetails() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.loadingService.start();
   this.storeData$ = this.fireApiService.getArt(id).pipe(
      tap((art) => {
        if (art) {
          this.artData$ = this.museumApiService
            .getArtByObjectId(art.objectIds)
            .pipe(finalize(() => this.loadingService.stop()));
        }
      })
    );
  }
  goBack() {
    this.router.navigate(['content']);
  }

  ngOnInit() {
    this.initArtDetails();
  }
}
