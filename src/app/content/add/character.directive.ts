import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCharacter]',
})
export class CharacterDirective {
  @Input('length') length: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('window:keyup')
  checkLength() {
    if (this.length <= 10 && this.length > 0) {
      this.el.nativeElement.style.color = '#dc3545';
      return;
    }
    this.el.nativeElement.style.color = 'white';
  }
}
