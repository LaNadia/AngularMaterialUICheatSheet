import { Component } from '@angular/core';
import { buttonsData } from '../buttonsData';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  icons: string = buttonsData.icons;
}
