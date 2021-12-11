import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Art } from '../models';
import { addFacade } from './add.facade';
import { AddArtStorage } from './add.storage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [addFacade, AddArtStorage],
})
export class AddComponent implements OnInit {
  searchKey: string = '';

  searchHasError = false;

  selectArt$: Observable<Art> | null = null;

  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  constructor(private facade: addFacade) {}

  search() {
    if (!this.searchKey) {
      this.searchHasError = true;
      return;
    }
    this.searchHasError = false;

    this.facade.addToLastSearches(this.searchKey);

    this.selectArt$ = this.facade.fetchArt(this.searchKey);
  }
  ngOnInit() {}
}
