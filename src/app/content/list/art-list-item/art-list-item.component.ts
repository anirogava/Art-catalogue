import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ArtListItem } from '../../models';

@Component({
  selector: 'app-art-list-item',
  templateUrl: './art-list-item.component.html',
  styleUrls: ['./art-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtListItemComponent implements OnInit {
  @Input() item: ArtListItem | undefined;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate([`content/${this.item?.data.id}`]);
  }

  ngOnInit() {}
}
