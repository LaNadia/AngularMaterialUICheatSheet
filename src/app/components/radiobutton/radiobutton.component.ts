import { Component } from '@angular/core';
import { radiobuttonData } from './radiobuttonData';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent {

  BasicRadios: string = radiobuttonData.BasicRadios;
  RadiosWithNgModelHTML: string = radiobuttonData.RadiosWithNgModelHTML;
  RadiosWithNgModelTS: string = radiobuttonData.RadiosWithNgModelTS;


  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
