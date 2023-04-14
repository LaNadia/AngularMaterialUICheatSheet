import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipCanHaveCustomClassComponent } from './components/tooltip-can-have-custom-class/tooltip-can-have-custom-class.component';
import { TooltipWithShowHideDelayComponent2 } from './components/tooltip-with-show-hide-delay/tooltip-with-show-hide-delay2.component';
import { MaterialExportModule } from 'src/app/material-export/material-export.module';
import { TooltipComponent } from './tooltip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';



@NgModule({
  declarations: [
    TooltipComponent,
    TooltipWithShowHideDelayComponent2,
    TooltipCanHaveCustomClassComponent
  ],
  imports: [
    CommonModule,
    MaterialExportModule,
    ReactiveFormsModule,
    FormsModule,
    CodemirrorModule
  ],
  exports: [
    TooltipComponent,
    TooltipWithShowHideDelayComponent2,
    TooltipCanHaveCustomClassComponent
  ]
})
export class TooltipModule { }
