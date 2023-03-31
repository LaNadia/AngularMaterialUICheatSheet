import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ButtonsComponent } from '../pages/buttons/buttons.component';
import { ChipsComponent } from '../pages/chips/chips.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  element: any | null;
  @ViewChild('sidenav', {static: true}) sidenav!: MatSidenav;

toggleSidenav(){
  this.sidenav.toggle();
  this.element = null;
}
  showElement(element: string){
    switch(element) {
      case 'buttons': 
        this.element = ButtonsComponent;
        break;
      case 'chips':
        this.element = ChipsComponent;
        break;
      
      default:
        this.element = null;
    }
  }
}
