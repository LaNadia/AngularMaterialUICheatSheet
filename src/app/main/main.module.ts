import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from '../pages/buttons/buttons.component';
import { MainComponent } from './main.component';
import { MaterialExportModule } from '../material-export/material-export.module';
import { ChipsComponent } from '../pages/chips/chips.component';


const routes: Routes = [
   { path:'', redirectTo: 'home', pathMatch: 'full' },
   { path:'home', component: MainComponent},
   { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    ButtonsComponent,
    ChipsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExportModule
  ],
  exports: [
    ButtonsComponent,
    ChipsComponent,
  ]
})
export class MainModule { }
