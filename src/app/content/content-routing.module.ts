import { ContentChildren, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContentComponent } from './content.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  // {
  //   path: 'list',
  //   component: ListComponent,
  // },
  {
    path: 'add',
    component: AddComponent,
  },
  // {
  //   path: 'details/:id',
  //   component: DetailsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
