import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MuseumApiService } from './services';

@NgModule({
  imports: [CommonModule, ContentRoutingModule, SharedModule, FormsModule],
  declarations: [
    ContentComponent,
    ListComponent,
    DetailsComponent,
    AddComponent,
  ],
  providers:[MuseumApiService]
})
export class ContentModule {}
