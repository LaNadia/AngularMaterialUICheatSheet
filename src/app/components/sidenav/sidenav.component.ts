import { Component } from '@angular/core';
import { sidenavData } from './sidenavData';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  showFiller = false;

  AutosizeSidenavHTML: string = sidenavData.AutosizeSidenavHTML;
  AutosizeSidenavTS: string = sidenavData.AutosizeSidenavTS;
  AutosizeSidenavCSS: string = sidenavData.AutosizeSidenavCSS;
  DrawerExplicitBackdropSettingHTML: string = sidenavData.DrawerExplicitBackdropSettingHTML;
  DrawerExplicitBackdropSettingCSS: string = sidenavData.DrawerExplicitBackdropSettingCSS;
}
