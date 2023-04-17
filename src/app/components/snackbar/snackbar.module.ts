import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarCustomComponent } from './snackbar-custom-component/snackbar-custom-component.component';
import { SnackbarAnnotatedCustomComponent } from './snackbar-annotated-custom-component/snackbar-annotated-custom-component.component';
import { MaterialExportModule } from 'src/app/material-export/material-export.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SnackbarComponent,
    SnackbarCustomComponent,
    SnackbarAnnotatedCustomComponent
  ],
  imports: [
    CommonModule,
    MaterialExportModule,
    CodemirrorModule,
    FormsModule
  ],
  exports: [
    SnackbarComponent,
    SnackbarCustomComponent,
    SnackbarAnnotatedCustomComponent
  ]
})
export class SnackbarModule { }
