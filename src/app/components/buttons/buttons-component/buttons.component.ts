import { Component } from '@angular/core';
import { buttonsData } from '../buttonsData';




@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],

  
})
export class ButtonsComponent {

  buttons: string = buttonsData.buttons;
  buttonsWithColors: string = buttonsData.buttonsWithColors;
  otherButtons: string = buttonsData.otherButtons;


}
