import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.scss']
})
export class DialogElementsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}