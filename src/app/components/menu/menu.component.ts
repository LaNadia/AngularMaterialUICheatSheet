import { Component } from '@angular/core';
import { menuData } from './menuData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  BasicMenu: string = menuData.BasicMenu;
  MenuPositioning: string = menuData.MenuPositioning;
  MenuWithIcons: string = menuData.MenuWithIcons;
  NestedMenu: string = menuData.NestedMenu;
}
