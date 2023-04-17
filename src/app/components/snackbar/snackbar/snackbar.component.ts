import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { snackbarData } from '../snackbarData';

@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.scss']
})
export class SnackbarComponent {

  BasicSnackbarHTML: string = snackbarData.BasicSnackbarHTML;
  BasicSnackbarTS: string = snackbarData.BasicSnackbarTS;

  SnackbarConfigurablePositionHTML: string = snackbarData.SnackbarConfigurablePositionHTML;
  SnackbarConfigurablePositionTS: string = snackbarData.SnackbarConfigurablePositionTS;

  SnackbarAnnotatedCustomComponentHTML: string = snackbarData.SnackbarAnnotatedCustomComponentHTML;
  SnackbarAnnotatedCustomComponentTS: string = snackbarData.SnackbarAnnotatedCustomComponentTS;
  SnackbarAnnotatedCustomComponentExampleHTML: string = snackbarData.SnackbarAnnotatedCustomComponentExampleHTML;
  
  SnackbarCustomComponentHTML: string = snackbarData.SnackbarCustomComponentHTML;
  SnackbarCustomComponentTS: string = snackbarData.SnackbarCustomComponentTS;
  SnackbarCustomComponentExampleHTML: string = snackbarData.SnackbarCustomComponentExampleHTML;


  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar1(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  openSnackBar2() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

