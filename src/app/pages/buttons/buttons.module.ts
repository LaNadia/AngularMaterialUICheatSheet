import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtontoggleComponent } from './buttontoggle/buttontoggle.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons.component';
import { MaterialExportModule } from 'src/app/material-export/material-export.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonsComponent,
    ButtontoggleComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExportModule,
    CodemirrorModule
  ],
  exports: [
    ButtonsComponent,
    ButtontoggleComponent,
    IconsComponent
  ]
})
export class ButtonsModule { }
