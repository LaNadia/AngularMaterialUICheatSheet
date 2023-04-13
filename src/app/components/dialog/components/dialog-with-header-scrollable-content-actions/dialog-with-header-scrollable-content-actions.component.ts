import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-with-header-scrollable-content-actions',
  templateUrl: './dialog-with-header-scrollable-content-actions.component.html',
  styleUrls: ['./dialog-with-header-scrollable-content-actions.component.scss']
})
export class DialogWithHeaderScrollableContentActionsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

