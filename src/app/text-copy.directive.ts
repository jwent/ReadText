import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextCopy]'
})
export class TextCopyDirective {

  public el: ElementRef;
  
  public CopiedText:string = "nothing yet";

  constructor(el: ElementRef) { 
    this.el = el;
  }

  public CopyText() {
    document.execCommand('copy');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.select();
  }
  
}
