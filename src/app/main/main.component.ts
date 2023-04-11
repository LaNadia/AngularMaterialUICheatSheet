import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ButtonsComponent } from '../components/buttons/buttons-component/buttons.component';
import { ButtontoggleComponent } from '../components/buttons/buttontoggle/buttontoggle.component';
import { IconsComponent } from '../components/buttons/icons/icons.component';
import { ChipsComponent } from '../components/chips/chips-component/chips.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { ProgressbarComponent } from '../components/progressbar/progressbar.component';
import { ProgressspinnerComponent } from '../components/progressspinner/progressspinner.component';
import { CardComponent } from '../components/card/card.component';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';
import { FormfieldComponent } from '../components/formfield/formfield.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { ExpansionPanelComponent } from '../components/expansion-panel/expansion-panel.component';
import { GridListComponent } from '../components/grid-list/grid-list.component';
import { MenuComponent } from '../components/menu/menu.component';
import { SelectComponent } from '../components/select/select.component';
import { InputComponent } from '../components/input/input.component';
import { ListComponent } from '../components/list/list.component';
import { SliderComponent } from '../components/slider/slider.component';
import { SlideToggleComponent } from '../components/slide-toggle/slide-toggle.component';
import { TableComponent } from '../components/table/table.component';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  element: any | null;
  @ViewChild('sidenav', {static: true}) sidenav!: MatSidenav;

  toggleSidenav(event: MouseEvent){

    this.sidenav.toggle();
    console.log(event.currentTarget)

  };

  showElement(element: string){
      switch(element) {
        case 'buttons': 
          this.element = ButtonsComponent;
          break;
        case 'chips':
          this.element = ChipsComponent;
          break;
        case 'icons': 
          this.element = IconsComponent;
          break;
        case 'toggleButtons': 
          this.element = ButtontoggleComponent;
          break;
        case 'badge': 
          this.element = BadgeComponent;
          break;
        case 'progressbar': 
          this.element = ProgressbarComponent;
          break;
        case 'progressspinner': 
          this.element = ProgressspinnerComponent;
          break;
        case 'cards': 
          this.element = CardComponent;
          break;
        case 'autocomplete': 
          this.element = AutocompleteComponent;
          break;
        case 'checkbox': 
          this.element = CheckboxComponent;
          break;
        case 'datepicker': 
          this.element = DatepickerComponent;
          break;
        case 'radiobutton': 
          this.element = RadiobuttonComponent;
          break;
        case 'formfield': 
          this.element = FormfieldComponent;
          break;
        case 'paginator': 
          this.element = PaginatorComponent;
          break;
        case 'expansionpanel': 
          this.element = ExpansionPanelComponent;
          break;
        case 'gridlist': 
          this.element = GridListComponent;
          break;
        case 'menu': 
          this.element = MenuComponent;
          break;
        case 'select': 
          this.element = SelectComponent;
          break;
        case 'input': 
          this.element = InputComponent;
          break;
        case 'list': 
          this.element = ListComponent;
          break;
        case 'slider': 
          this.element = SliderComponent;
          break;
        case 'slidetoggle': 
          this.element = SlideToggleComponent;
          break;
        case 'table': 
          this.element = TableComponent;
          break;

          
          
        default:
          this.element = null;
      }
    }
}
