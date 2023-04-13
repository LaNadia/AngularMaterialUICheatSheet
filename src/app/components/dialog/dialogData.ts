export const dialogData: any  ={

    DialogAnimationsHTML:
    `<button mat-raised-button (click)="openDialog('0ms', '0ms')">Open dialog without animation</button>
    <button mat-raised-button (click)="openDialog('3000ms', '1500ms')">Open dialog slowly</button>`,
    DialogAnimationsTS:
    `import {Component} from '@angular/core';
    import {MatDialog, MatDialogRef} from '@angular/material/dialog';
    
    constructor(public dialog: MatDialog) {}

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(DialogAnimationsExampleDialog, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  }
  
  @Component({
    selector: 'dialog-animations-example-dialog',
    templateUrl: 'dialog-animations-example-dialog.html',
  })
  export class DialogAnimationsExampleDialog {
    constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
    }`,
    DialogAnimationsCSS:
    `button {
        margin-right: 8px;
      }`,
    DialogAnimationsExampleHTML:
    `<h1 mat-dialog-title>Delete file</h1>
    <div mat-dialog-content>
      Would you like to delete cat.jpeg?
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
    </div>`,


    DialogWithHeaderScrollableContentActionsHTML:
    `<button mat-button (click)="openDialog()">Open dialog</button>`,
    DialogWithHeaderScrollableContentActionsTS:
    `import {Component} from '@angular/core';
    import {MatDialog} from '@angular/material/dialog';
    
    constructor(public dialog: MatDialog) {}

    openDialog() {
      const dialogRef = this.dialog.open(DialogContentExampleDialog);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: $ {result}');
      });
    }
  }
  
  @Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'dialog-content-example-dialog.html',
  })
     export class DialogContentExampleDialog {}`,
    DialogWithHeaderScrollableContentActionsExampleHTML:
    `<h2 mat-dialog-title>Install Angular</h2>
    <mat-dialog-content class="mat-typography">
      <h3>Develop across all platforms</h3>
      <p>Learn one way to build applications with Angular and reuse your code and abilities to build
        apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>
    
      <h3>Speed &amp; Performance</h3>
      <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
        Workers and server-side rendering. Angular puts you in control over scalability. Meet huge
        data requirements by building data models on RxJS, Immutable.js or another push-model.</p>
    
      <h3>Incredible tooling</h3>
      <p>Build features quickly with simple, declarative templates. Extend the template language with
        your own components and use a wide array of existing components. Get immediate Angular-specific
        help and feedback with nearly every IDE and editor. All this comes together so you can focus
        on building amazing apps rather than trying to make the code work.</p>
    
      <h3>Loved by millions</h3>
      <p>From prototype through global deployment, Angular delivers the productivity and scalable
        infrastructure that supports Google's largest applications.</p>
    
      <h3>What is Angular?</h3>
    
      <p>Angular is a platform that makes it easy to build applications with the web. Angular
        combines declarative templates, dependency injection, end to end tooling, and integrated
        best practices to solve development challenges. Angular empowers developers to build
        applications that live on the web, mobile, or the desktop</p>
    
      <h3>Architecture overview</h3>
    
      <p>Angular is a platform and framework for building client applications in HTML and TypeScript.
      Angular is itself written in TypeScript. It implements core and optional functionality as a
      set of TypeScript libraries that you import into your apps.</p>
    
      <p>The basic building blocks of an Angular application are NgModules, which provide a compilation
      context for components. NgModules collect related code into functional sets; an Angular app is
      defined by a set of NgModules. An app always has at least a root module that enables
      bootstrapping, and typically has many more feature modules.</p>
    
      <p>Components define views, which are sets of screen elements that Angular can choose among and
      modify according to your program logic and data. Every app has at least a root component.</p>
    
      <p>Components use services, which provide specific functionality not directly related to views.
      Service providers can be injected into components as dependencies, making your code modular,
      reusable, and efficient.</p>
    
      <p>Both components and services are simply classes, with decorators that mark their type and
      provide metadata that tells Angular how to use them.</p>
    
      <p>The metadata for a component class associates it with a template that defines a view. A
      template combines ordinary HTML with Angular directives and binding markup that allow Angular
      to modify the HTML before rendering it for display.</p>
    
      <p>The metadata for a service class provides the information Angular needs to make it available
      to components through Dependency Injection (DI).</p>
    
      <p>An app's components typically define many views, arranged hierarchically. Angular provides
      the Router service to help you define navigation paths among views. The router provides
      sophisticated in-browser navigational capabilities.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
    </mat-dialog-actions>`,

    InjectingDataWhenOpeningDialogHTML:
    `<button mat-button (click)="openDialog()">Open dialog</button>`,
    InjectingDataWhenOpeningDialogTS:
    `import {Component, Inject} from '@angular/core';
    import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
    
    export interface DialogData {
      animal: 'panda' | 'unicorn' | 'lion';
    }
    
    constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          animal: 'panda',
        },
      });
    }
  }
  
  @Component({
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialog-data-example-dialog.html',
  })
  export class DialogDataExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  }
    `,
    InjectingDataWhenOpeningDialogExampleHTML:
    `<h1 mat-dialog-title>Favorite Animal</h1>
    <div mat-dialog-content>
      My favorite animal is:
      <ul>
        <li>
          <span *ngIf="data.animal === 'panda'">&#10003;</span> Panda
        </li>
        <li>
          <span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn
        </li>
        <li>
          <span *ngIf="data.animal === 'lion'">&#10003;</span> Lion
        </li>
      </ul>
    </div>`,

    DialogElementsHTML:
    `<button mat-button (click)="openDialog()">Launch dialog</button>`,
    DialogElementsTS:
    `import {Component} from '@angular/core';
    import {MatDialog} from '@angular/material/dialog';
    
    constructor(public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(DialogElementsExampleDialog);
    }
  }
  
  @Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: 'dialog-elements-example-dialog.html',
  })
    export class DialogElementsExampleDialog {}`,
    DialogElementsExampleHTML:
    `<h1 mat-dialog-title>Dialog with elements</h1>
    <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>`,


    DialogLaunchedFromMenuHTML:
    `<button mat-button [matMenuTriggerFor]="menu" #menuTrigger>Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="openDialog()">Open dialog</button>
    </mat-menu>`,
    DialogLaunchedFromMenuTS:
    `import {Component, ViewChild} from '@angular/core';
    import {MatDialog} from '@angular/material/dialog';
    import {MatMenuTrigger} from '@angular/material/menu';
    
    @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false});
  
      // Manually restore focus to the menu trigger since the element that
      // opens the dialog won't be in the DOM any more when the dialog closes.
      dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    }
  }
  
  @Component({
    selector: 'dialog-from-menu-dialog',
    templateUrl: 'dialog-from-menu-example-dialog.html',
  })
     export class DialogFromMenuExampleDialog {}`,
    DialogLaunchedFromMenuExampleHTML:
    `<mat-dialog-content>
    This is a dialog
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close>Okay</button>
    </mat-dialog-actions>`,

    DialogOverviewHTML:
    `<ol>
    <li>
      <mat-form-field appearance="fill">
        <mat-label>What's your name?</mat-label>
        <input matInput [(ngModel)]="name">
      </mat-form-field>
    </li>
    <li>
      <button mat-raised-button (click)="openDialog()">Pick one</button>
    </li>
    <li *ngIf="animal">
      You chose: <i>{{animal}}</i>
    </li>
    </ol>`,
    DialogOverviewTS:
    `import {Component, Inject} from '@angular/core';
    import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
    
    export interface DialogData {
      animal: string;
      name: string;
    }
    
    animal: string;
    name: string;
  
    constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        data: {name: this.name, animal: this.animal},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
  }
  
  @Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class DialogOverviewExampleDialog {
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }`,
    DialogOverviewExampleHTML:
    `<h1 mat-dialog-title>Hi {{data.name}}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field appearance="fill">
        <mat-label>Favorite Animal</mat-label>
        <input matInput [(ngModel)]="data.animal">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
    </div>`,

}