import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { tooltipData } from './tooltipData';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  
  BasicTooltip1HTML: string = tooltipData.BasicTooltip1HTML;
  BasicTooltip2HTML: string = tooltipData.BasicTooltip2HTML;
  BasicTooltip2TS: string = tooltipData.BasicTooltip2TS;
  BasicTooltip2CSS: string = tooltipData.BasicTooltip2CSS;
  TooltipWithCustomPositionHTML: string = tooltipData.TooltipWithCustomPositionHTML;
  TooltipWithCustomPositionTS: string = tooltipData.TooltipWithCustomPositionTS;
  TooltipWithChangingMessageHTML: string = tooltipData.TooltipWithChangingMessageHTML;
  TooltipWithChangingMessageTS: string = tooltipData.TooltipWithChangingMessageTS;
  TooltipManuallyShownHiddenHTML: string = tooltipData.TooltipManuallyShownHiddenHTML;
  TooltipDisabledHTML: string = tooltipData.TooltipDisabledHTML;
  TooltipDisabledTS: string = tooltipData.TooltipDisabledTS;
  TooltipShowHideDelayHTML: string = tooltipData.TooltipShowHideDelayHTML;
  TooltipShowHideDelayTS: string = tooltipData.TooltipShowHideDelayTS;
  TooltipAutoHidingClipsOutScrollingContainerHTML: string = tooltipData.TooltipAutoHidingClipsOutScrollingContainerHTML;
  TooltipAutoHidingClipsOutScrollingContainerTS: string = tooltipData.TooltipAutoHidingClipsOutScrollingContainerTS;
  TooltipWithShowHideDelay2HTML: string = tooltipData.TooltipWithShowHideDelay2HTML;
  TooltipWithShowHideDelay2TS: string = tooltipData.TooltipWithShowHideDelay2TS;
  TooltipCanHaveCustomClassHTML: string = tooltipData.TooltipCanHaveCustomClassHTML;
  TooltipCanHaveCustomClassTS: string = tooltipData.TooltipCanHaveCustomClassTS;
  TooltipCanHaveCustomClassCSS: string = tooltipData.TooltipCanHaveCustomClassCSS;

  // Basic Tooltip 2
  enabled = new FormControl(false);

  //Tooltip with a custom position
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  //Tooltip with a changing message
  message = new FormControl('Info about the action');

  //TooltipDisabled
  disabled = new FormControl(false);

  //Tooltip with a show and hide delay
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  //Tooltip that demonstrates auto-hiding when it clips out of its scrolling container
  positionOptions2: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position2 = new FormControl(this.positionOptions[0]);
}
