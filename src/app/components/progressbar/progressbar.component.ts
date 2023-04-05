import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressBarData } from './progressBarData';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  QueryProgressBar: string = ProgressBarData.QueryProgressBar;
  BufferProgressBar: string = ProgressBarData.BufferProgressBar;
  IndeterminateProgressBar: string = ProgressBarData.IndeterminateProgressBar;
  DeterminateProgressBar: string = ProgressBarData.DeterminateProgressBar;
  ConfigurableProgressBarHTML: string = ProgressBarData.ConfigurableProgressBarHTML;
  ConfigurableProgressBarTS: string = ProgressBarData.ConfigurableProgressBarTS;

}
