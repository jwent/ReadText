import { Component, ViewChild } from '@angular/core';
import { TextCopyDirective } from './text-copy.directive';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TextCopy';
  public CopiedText: string = "nothing yet";
  @ViewChild(TextCopyDirective) inputElement !: TextCopyDirective;

  
  //public tcd : TextCopyDirective = new TextCopyDirective();

  public ButtonClick() {
    this.inputElement.CopyText();
  }
}
