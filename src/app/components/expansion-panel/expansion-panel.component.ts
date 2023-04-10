import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { expansionPanelData } from './expansionPanelData';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {

  basicExpansionPanelHTML: string = expansionPanelData.basicExpansionPanelHTML;
  basicExpansionPanelTS: string = expansionPanelData.basicExpansionPanelTS;
  basicExpansionPanelCSS: string = expansionPanelData.basicExpansionPanelCSS;
  expansionPanelAsAccordionHTML: string = expansionPanelData.expansionPanelAsAccordionHTML;
  expansionPanelAsAccordionTS: string = expansionPanelData.expansionPanelAsAccordionTS;
  expansionPanelAsAccordionCSS: string = expansionPanelData.expansionPanelAsAccordionCSS;
  AccordionExpandCollapseHTML: string = expansionPanelData.AccordionExpandCollapseHTML;
  AccordionExpandCollapseTS: string = expansionPanelData.AccordionExpandCollapseTS;
  AccordionExpandCollapseCSS:  string = expansionPanelData.AccordionExpandCollapseCSS;


  panelOpenState = false;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}


