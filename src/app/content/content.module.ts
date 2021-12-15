import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuseumApiService } from './services';
import { addFacade } from './add/add.facade';
import { CharacterDirective } from './add/character.directive';
import { ArtListItemComponent } from './list/art-list-item/art-list-item.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContentRoutingModule,
    SharedModule,
    FormsModule,
    TranslateModule,
  ],
  declarations: [
    ContentComponent,
    DetailsComponent,
    AddComponent,
    CharacterDirective,
    ArtListItemComponent,
    ListComponent,
  ],
  providers: [MuseumApiService, addFacade],
})
export class ContentModule {}
