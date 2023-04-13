import { Component } from '@angular/core';
import { dialogData } from './dialogData';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  DialogAnimationsHTML: string = dialogData.DialogAnimationsHTML;
  DialogAnimationsTS: string = dialogData.DialoDialogAnimationsTSAnimationsHTML;
  DialogAnimationsCSS: string = dialogData.DialogAnimationsCSS;
  DialogAnimationsExampleHTML: string = dialogData.DialogAnimationsExampleHTML;
  DialogWithHeaderScrollableContentActionsHTML: string = dialogData.DialogWithHeaderScrollableContentActionsHTML;
  DialogWithHeaderScrollableContentActionsTS: string = dialogData.DialogWithHeaderScrollableContentActionsTS;
  DialogWithHeaderScrollableContentActionsExampleHTML: string = dialogData.DialogWithHeaderScrollableContentActionsExampleHTML;
  InjectingDataWhenOpeningDialogHTML: string = dialogData.InjectingDataWhenOpeningDialogHTML;
  InjectingDataWhenOpeningDialogTS: string = dialogData.InjectingDataWhenOpeningDialogTS;
  InjectingDataWhenOpeningDialogExampleHTML: string = dialogData.InjectingDataWhenOpeningDialogExampleHTML;
  DialogElementsHTML: string = dialogData.DialogElementsHTML;
  DialogElementsTS: string = dialogData.DialogElementsTS;
  DialogElementsExampleHTML: string = dialogData.DialogElementsExampleHTML;
  DialogLaunchedFromMenuHTML: string = dialogData.DialogLaunchedFromMenuHTML;
  DialogLaunchedFromMenuTS: string = dialogData.DialogLaunchedFromMenuTS;
  DialogLaunchedFromMenuExampleHTML: string = dialogData.DialogLaunchedFromMenuExampleHTML;
  DialogOverviewHTML: string = dialogData.DialogOverviewHTML;
  DialogOverviewTS: string = dialogData.DialogOverviewTS;
  DialogOverviewExampleHTML: string = dialogData.DialogOverviewExampleHTML;
}
