import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ProgressSpinnerData } from './progressSpinnerData';

@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.scss']
})
export class ProgressspinnerComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  BasicProgressSpinner: string = ProgressSpinnerData.BasicProgressSpinner;
  DeterminateProgressSpinner: string = ProgressSpinnerData.DeterminateProgressSpinner;
  ConfigurableProgressSpinnerHTML: string = ProgressSpinnerData.ConfigurableProgressSpinnerHTML;
  ConfigurableProgressSpinnerTS: string = ProgressSpinnerData.ConfigurableProgressSpinnerTS;
}
