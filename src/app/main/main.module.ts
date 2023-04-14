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
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';
import { CardComponent } from '../components/card/card.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';
import { FormfieldComponent } from '../components/formfield/formfield.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';
import { GridListComponent } from '../components/grid-list/grid-list.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SelectComponent } from '../components/select/select.component';
import { ExpansionPanelComponent } from '../components/expansion-panel/expansion-panel.component';
import { InputComponent } from '../components/input/input.component';
import { ListComponent } from '../components/list/list.component';
import { SlideToggleComponent } from '../components/slide-toggle/slide-toggle.component';
import { SliderComponent } from '../components/slider/slider.component';
import { TableModule } from '../components/table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from '../components/tabs/tabs.component';
import { DialogModule } from '../components/dialog/dialog.module';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { TreeComponent } from '../components/tree/tree.component';
import { TooltipModule } from '../components/tooltip/tooltip.module';
import { TreeModule } from '../components/tree/tree.module';



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
    CardComponent,
    CheckboxComponent,
    DatepickerComponent,
    AutocompleteComponent,
    FormfieldComponent,
    PaginatorComponent,
    RadiobuttonComponent,
    ExpansionPanelComponent,
    GridListComponent,
    MenuComponent,
    SelectComponent,
    InputComponent,
    ListComponent,
    SlideToggleComponent,
    SliderComponent,
    TabsComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MaterialExportModule,
    CodemirrorModule,
    ChipsModule,
    ButtonsModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    TooltipModule,
    TreeModule
  ],

  exports: [ 
    BadgeComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
    CardComponent,
    CheckboxComponent,
    DatepickerComponent,
    AutocompleteComponent,
    FormfieldComponent,
    PaginatorComponent,
    RadiobuttonComponent,
    ExpansionPanelComponent,
    GridListComponent,
    MenuComponent,
    SelectComponent,
    InputComponent,
    ListComponent,
    SlideToggleComponent,
    SliderComponent,
    TabsComponent,
    ToolbarComponent
  ]
})
export class MainModule { }
