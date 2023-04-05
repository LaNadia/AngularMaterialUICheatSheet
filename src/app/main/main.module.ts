import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MaterialExportModule } from '../material-export/material-export.module';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../components/buttons/buttons.module';
import { ChipsModule } from '../components/chips/chips.module';
import { BadgeComponent } from '../components/badge/badge.component';
import { ProgressbarComponent } from '../components/progressbar/progressbar.component';
import { ProgressspinnerComponent } from '../components/progressspinner/progressspinner.component';



const routes: Routes = [
   { path:'', redirectTo: 'home', pathMatch: 'full' },
   { path:'home', component: MainComponent},
   { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    BadgeComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialExportModule,
    CodemirrorModule,
    ChipsModule,
    ButtonsModule
  ],

  exports: [ 
    BadgeComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
  ]
})
export class MainModule { }
