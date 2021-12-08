import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MustMatchDirective } from './directives/must-match.directive';
import { LoadingComponent } from './loading/loading.component';
import { LoadingSpinnerComponent } from './loading/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule],
  exports: [TranslateModule, MustMatchDirective, LoadingComponent],
  declarations: [MustMatchDirective, LoadingComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
