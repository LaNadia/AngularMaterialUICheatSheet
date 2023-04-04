import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from '../pages/buttons/buttons.component';
import { MainComponent } from './main.component';
import { MaterialExportModule } from '../material-export/material-export.module';
import { ChipsComponent } from '../pages/chips/chips.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsWithAutocompleteComponent } from '../pages/chips/chips-with-autocomplete/chips-with-autocomplete.component';
import { ChipsWithFormControlAndButtonsComponent } from '../pages/chips/chips-with-form-control-and-buttons/chips-with-form-control-and-buttons.component';


const routes: Routes = [
   { path:'', redirectTo: 'home', pathMatch: 'full' },
   { path:'home', component: MainComponent},
   { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    ButtonsComponent,
    ChipsComponent,
    ChipsWithAutocompleteComponent,
    ChipsWithFormControlAndButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialExportModule,
    CodemirrorModule,
  ],
  exports: [
    ButtonsComponent,
    ChipsComponent,
  ]
})
export class MainModule { }
