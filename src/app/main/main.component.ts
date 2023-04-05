import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ButtonsComponent } from '../components/buttons/buttons-component/buttons.component';
import { ButtontoggleComponent } from '../components/buttons/buttontoggle/buttontoggle.component';
import { IconsComponent } from '../components/buttons/icons/icons.component';
import { ChipsComponent } from '../components/chips/chips-component/chips.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { ProgressbarComponent } from '../components/progressbar/progressbar.component';
import { ProgressspinnerComponent } from '../components/progressspinner/progressspinner.component';



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
        
        default:
          this.element = null;
      }
    }
}
