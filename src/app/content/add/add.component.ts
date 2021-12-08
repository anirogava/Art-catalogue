import { Component, OnInit } from '@angular/core';
import { addFacade } from './add.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [addFacade],
})
export class AddComponent implements OnInit {
  lastThreeSearches = [];

  searchKey: string = '';

  hasError = false;

  constructor(private facade: addFacade) {}

  search() {
    if (!this.searchKey) {
      this.hasError = true;
      return;
    }
    this.hasError = false;
    this.facade.fetchArt(this.searchKey);
  }

  ngOnInit() {}
}
