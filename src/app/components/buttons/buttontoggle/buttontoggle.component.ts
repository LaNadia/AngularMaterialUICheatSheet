import { Component } from '@angular/core';
import { buttonsData } from '../buttonsData';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buttontoggle',
  templateUrl: './buttontoggle.component.html',
  styleUrls: ['./buttontoggle.component.scss']
})
export class ButtontoggleComponent {

  //single-multiple toggle
  singleToggle: string = buttonsData.singleToggle;
  mutlipleToggle: string = buttonsData.mutlipleToggle;


  //Button-toggles with forms
  buttonToggleTemplatedrivenform: string = buttonsData.buttonToggleTemplatedrivenform;
  buttonToggleReactiveform: string = buttonsData.buttonToggleReactiveform;
  buttonToggleReactiveformTS: string = buttonsData.buttonToggleReactiveformTS;
  fontStyleControl = new FormControl('');
  fontStyle?: string;


  //ButtonTogglesNoForms
  ButtonTogglesNoForms: string = buttonsData.buttonTogglesNoForms;


  //Button toggle appearance
  ButtonToggleAppearance: string = buttonsData.buttonToggleAppearance;




}
