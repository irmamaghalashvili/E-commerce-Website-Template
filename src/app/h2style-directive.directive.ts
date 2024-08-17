import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appH2styleDirective]',
  standalone: true
})
export class H2styleDirectiveDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.classList.add('font-integral', 'text-h2', 'text-h2');
  }

}
