import { Component } from '@angular/core';
import { sliderData } from './sliderData';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  BasicSliderHTML: string = sliderData.BasicSliderHTML;
  RangeSliderHTML: string = sliderData.RangeSliderHTML;
  SliderWithCustomThumbLabelFormattingHTML: string = sliderData.SliderWithCustomThumbLabelFormattingHTML;
  SliderWithCustomThumbLabelFormattingTS: string = sliderData.SliderWithCustomThumbLabelFormattingTS;
  ConfigurableSliderHTML: string = sliderData.ConfigurableSliderHTML;
  ConfigurableSliderTS: string = sliderData.ConfigurableSliderTS;



  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  };

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

}
