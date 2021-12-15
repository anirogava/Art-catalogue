import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services';
import { EventBusService } from 'src/app/services/event-bus.service';
import { FORM_RESET_EVENT_KEY, RATINGS } from '../content.model';
import { Art, ArtBody } from '../models';
import { addFacade } from './add.facade';
import { AddArtStorage } from './add.storage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [addFacade, AddArtStorage],
})
export class AddComponent implements OnInit {
  private unsubscribe$ = new Subject();

  form: FormGroup = new FormGroup({});

  searchKey: string = '';

  searchHasError = false;

  selectArt$: Observable<Art> | null = null;

  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  submitted = false;

  get ratings(): number[] {
    return RATINGS;
  }

  constructor(
    private facade: addFacade,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private eventBus: EventBusService
  ) {}

  search() {
    if (!this.searchKey) {
      this.searchHasError = true;
      return;
    }
    this.searchHasError = false;

    this.facade.addToLastSearches(this.searchKey);
    this.fetchArt(this.searchKey);
  }
  fetchArt(title: string) {
    this.selectArt$ = this.facade.fetchArt(title);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      review: ['', [Validators.required, Validators.minLength(10)]],
      rating: 1,
    });
  }
  submit(selectArt: Art) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const value = this.form.value;

    const body: ArtBody = {
      objectIds: selectArt.objectID,
      uid: this.auth.userId,
      rating: value.rating,
      review: value.review,
    };
    this.facade.submit(body);
  }
  private formReset() {
    this.form.reset();
    this.form.updateValueAndValidity();

    this.submitted = false;

    this.form.get('review')?.setValue('');
    this.form.get('rating')?.setValue(1);

  }
  ngOnInit() {
    this.buildForm();
    this.facade.restoreState();
    this.eventBus
      .on(FORM_RESET_EVENT_KEY)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.formReset());
  }

}
