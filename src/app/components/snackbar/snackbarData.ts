export const snackbarData: any  ={

    BasicSnackbarHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Message</mat-label>
    <input matInput value="Disco party!" #message>
  </mat-form-field>
  
  <mat-form-field appearance="fill">
    <mat-label>Action</mat-label>
    <input matInput value="Dance" #action>
  </mat-form-field>
  
    <button mat-stroked-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>`,
    BasicSnackbarTS:
    `import {Component} from '@angular/core';
    import {MatSnackBar} from '@angular/material/snack-bar';
    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }`,

    SnackbarConfigurablePositionHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Horizontal position</mat-label>
    <mat-select [(value)]="horizontalPosition">
      <mat-option value="start">Start</mat-option>
      <mat-option value="center">Center</mat-option>
      <mat-option value="end">End</mat-option>
      <mat-option value="left">Left</mat-option>
      <mat-option value="right">Right</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field appearance="fill">
    <mat-label>Vertical position</mat-label>
    <mat-select [(value)]="verticalPosition">
      <mat-option value="top">Top</mat-option>
      <mat-option value="bottom">Bottom</mat-option>
    </mat-select>
  </mat-form-field>
  
  <button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
    Pool party!
    </button>`,
    SnackbarConfigurablePositionTS:
    `import {Component} from '@angular/core';
     import {
       MatSnackBar,
       MatSnackBarHorizontalPosition,
       MatSnackBarVerticalPosition,
     } from '@angular/material/snack-bar';
     
     horizontalPosition: MatSnackBarHorizontalPosition = 'start';
     verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   
     constructor(private _snackBar: MatSnackBar) {}
   
     openSnackBar() {
       this._snackBar.open('Cannonball!!', 'Splash', {
         horizontalPosition: this.horizontalPosition,
         verticalPosition: this.verticalPosition,
       });
     }
    }`,


    SnackbarAnnotatedCustomComponentHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Snack bar duration (seconds)</mat-label>
    <input type="number" [(ngModel)]="durationInSeconds" matInput>
  </mat-form-field>
  
  <button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
    Pizza party
    </button>`,
    SnackbarAnnotatedCustomComponentTS:
    `import {Component, inject} from '@angular/core';
    import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
    
    @Component({
        selector: 'snack-bar-annotated-component-example',
        templateUrl: 'snack-bar-annotated-component-example.html',
        styleUrls: ['snack-bar-annotated-component-example.css'],
      })
      export class SnackBarAnnotatedComponentExample {
        durationInSeconds = 5;
      
        constructor(private _snackBar: MatSnackBar) {}
      
        openSnackBar() {
          this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
            duration: this.durationInSeconds * 1000,
          });
        }
      }
      
      @Component({
        selector: 'snack-bar-annotated-component-example-snack',
        templateUrl: 'snack-bar-annotated-component-example-snack.html',
      })
      export class PizzaPartyAnnotatedComponent {
        snackBarRef = inject(MatSnackBarRef);
      }`,
    SnackbarAnnotatedCustomComponentExampleHTML:
    `<span class="example-pizza-party" matSnackBarLabel>
    Pizza party!!!
  </span>
  <span matSnackBarActions>
    <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">🍕</button>
    </span>`,

    SnackbarCustomComponentHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Snack bar duration (seconds)</mat-label>
    <input type="number" [(ngModel)]="durationInSeconds" matInput>
  </mat-form-field>
  
  <button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
    Pizza party
    </button>`,
    SnackbarCustomComponentTS:
    `import {Component} from '@angular/core';
    import {MatSnackBar} from '@angular/material/snack-bar';
    
    /**
     * @title Snack-bar with a custom component
     */
    @Component({
      selector: 'snack-bar-component-example',
      templateUrl: 'snack-bar-component-example.html',
      styleUrls: ['snack-bar-component-example.css'],
    })
    export class SnackBarComponentExample {
      durationInSeconds = 5;
    
      constructor(private _snackBar: MatSnackBar) {}
    
      openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
          duration: this.durationInSeconds * 1000,
        });
      }
    }
    
    @Component({
      selector: 'snack-bar-component-example-snack',
      templateUrl: 'snack-bar-component-example-snack.html',
    })
    export class PizzaPartyComponent {}`,
    SnackbarCustomComponentExampleHTML:
    `<span class="example-pizza-party">
    Pizza party!!! 🍕
    </span>`,
  
}