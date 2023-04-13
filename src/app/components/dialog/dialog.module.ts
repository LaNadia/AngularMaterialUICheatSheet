import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExportModule } from 'src/app/material-export/material-export.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { DialogAnimationsComponent, DialogAnimationsExampleDialog } from './components/dialog-animations/dialog-animations.component';
import { DialogComponent } from './dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentExampleDialog, DialogWithHeaderScrollableContentActionsComponent } from './components/dialog-with-header-scrollable-content-actions/dialog-with-header-scrollable-content-actions.component';
import { DialogDataExampleDialog, InjectingDataWhenOpeningDialogComponent } from './components/injecting-data-when-opening-dialog/injecting-data-when-opening-dialog.component';
import { DialogElementsComponent, DialogElementsExampleDialog } from './components/dialog-elements/dialog-elements.component';
import { DialogFromMenuExampleDialog, DialogLaunchedFromMenuComponent } from './components/dialog-launched-from-menu/dialog-launched-from-menu.component';
import { DialogOverviewComponent, DialogOverviewExampleDialog } from './components/dialog-overview/dialog-overview.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogComponent,
    DialogAnimationsComponent,
    DialogAnimationsExampleDialog,
    DialogWithHeaderScrollableContentActionsComponent,
    DialogContentExampleDialog,
    InjectingDataWhenOpeningDialogComponent,
    DialogDataExampleDialog,
    DialogElementsComponent,
    DialogElementsExampleDialog,
    DialogLaunchedFromMenuComponent,
    DialogFromMenuExampleDialog,
    DialogOverviewComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    MaterialExportModule,
    CodemirrorModule,
    FormsModule
  ],
  exports: [
    DialogComponent,
    DialogAnimationsComponent,
    DialogAnimationsExampleDialog,
    DialogWithHeaderScrollableContentActionsComponent,
    DialogContentExampleDialog,
    InjectingDataWhenOpeningDialogComponent,
    DialogDataExampleDialog,
    DialogElementsComponent,
    DialogElementsExampleDialog,
    DialogLaunchedFromMenuComponent,
    DialogFromMenuExampleDialog,
    DialogOverviewComponent,
    DialogOverviewExampleDialog
  ],

})
export class DialogModule { }
