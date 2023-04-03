import { Component, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],

  
})
export class ButtonsComponent {
  // constructor(private sanitizer: DomSanitizer) {}
  buttons: string =
`<button mat-button>mat-button</button>
<button mat-raised-button>raised-button</button>
<button mat-flat-button>flat-button</button>
<button mat-stroked-button>Basic</button>
<button mat-stroked-button color="primary">Primary</button>`;

buttonsWithColors: string = 
`<button color='primary' mat-button>primary</button>
<button color='accent' mat-button>accent</button>
<button color='warn' disableRipple mat-button>warn</button>
<button color='primary' mat-raised-button>raised-button</button>`;


otherButtons: string =
`<button mat-icon-button><mat-icon>open_in_new</mat-icon></button>
<button mat-fab>fab</button>
<button mat-mini-fab>mini-fab</button>`;


// safeHTML(button: any) {
//   return this.sanitizer.bypassSecurityTrustHtml(button);
// }


  //  '<button mat-button>mat-button</button>',
  //  '<button mat-raised-button>raised-button</button>',
  //  '<button mat-flat-button>flat-button</button>',
  //  '<button mat-stroked-button>Basic</button>',
  //  '<button mat-stroked-button color="primary">Primary</button>',

  //  '<button mat-icon-button><mat-icon>open_in_new</mat-icon></button>',
  //  '<button mat-fab>fab</button>',
  //  '<button mat-mini-fab>mini-fab</button>',

  
  //  "<button color='primary' mat-button>primary</button>",
  //  "<button color='accent' mat-button>accent</button>",
  //  "<button color='warn' disableRipple mat-button>warn</button>",
  //  "<button color='primary' mat-raised-button>raised-button</button>"
  
}
