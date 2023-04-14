import { Component } from '@angular/core';
import { toolbarData } from './toolbarData';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  BasicToolbarHTML: string = toolbarData.BasicToolbarHTML;
  MultiRowToolbarHTML: string = toolbarData.MultiRowToolbarHTML;
  ToolbarOverviewHTML: string = toolbarData.ToolbarOverviewHTML;
}
