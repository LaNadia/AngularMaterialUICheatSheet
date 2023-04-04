import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsWithAutocompleteComponent } from './chips-with-autocomplete/chips-with-autocomplete.component';
import { ChipsWithFormControlAndButtonsComponent } from './chips-with-form-control-and-buttons/chips-with-form-control-and-buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExportModule } from 'src/app/material-export/material-export.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ChipsComponent } from './chips-component/chips.component';



@NgModule({
  declarations: [
    ChipsComponent,
    ChipsWithAutocompleteComponent,
    ChipsWithFormControlAndButtonsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialExportModule,
    CodemirrorModule
  ],
  exports: [
    ChipsComponent,
    ChipsWithAutocompleteComponent,
    ChipsWithFormControlAndButtonsComponent,
  ]
})
export class ChipsModule { }
