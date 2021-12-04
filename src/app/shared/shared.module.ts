import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MustMatchDirective } from './directives/must-match.directive';

@NgModule({
  imports: [CommonModule],
  exports: [TranslateModule, MustMatchDirective],
  declarations: [
      MustMatchDirective
   ],
})
export class SharedModule {}
