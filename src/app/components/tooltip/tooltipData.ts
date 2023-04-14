export const tooltipData: any = {

    BasicTooltip1HTML:
    `<button mat-raised-button
        matTooltip="Info about the action"
        aria-label="Button that displays a tooltip when focused or hovered over">
    Action
    </button>`,

    BasicTooltip2HTML:
    `<button mat-raised-button
        class="demo-button"
        matTooltip="Info about the action"
        [matTooltipPositionAtOrigin]="enabled.value"
        aria-label="Button that displays a tooltip when focused or hovered over">
    Action
    </button>

    <mat-checkbox [formControl]="enabled" class="example-enabled-checkbox">
    Position at origin enabled
    </mat-checkbox>`,
    BasicTooltip2TS:
    `enabled = new FormControl(false);`,
    BasicTooltip2CSS:
    `button.demo-button {
        width: 500px;
        height: 500px;
      }
      
      .example-enabled-checkbox {
        margin-left: 8px;
      }`,

    TooltipWithCustomPositionHTML:
    `<mat-form-field class="example-user-input" appearance="fill">
    <mat-label>Tooltip position</mat-label>
    <mat-select [formControl]="position">
      <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">
        {{positionOption}}
      </mat-option>
    </mat-select>
  </mat-form-field>
  
  <button mat-raised-button
          matTooltip="Info about the action"
          [matTooltipPosition]="position.value!"
          aria-label="Button that displays a tooltip in various positions">
    Action
    </button>`,
    TooltipWithCustomPositionTS:
    `positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
    position = new FormControl(this.positionOptions[0]);`,

    TooltipWithChangingMessageHTML:
    `<mat-form-field class="example-user-input" appearance="fill">
    <mat-label>Tooltip message</mat-label>
    <input matInput [formControl]="message">
  </mat-form-field>
  
  <button mat-raised-button
          [matTooltip]="message.value || ''"
          aria-label="Button that displays a tooltip with a custom message">
    Action
    </button>`,
    TooltipWithChangingMessageTS:
    `message = new FormControl('Info about the action');`,

    TooltipManuallyShownHiddenHTML:
    `<div>
    <span> Click the following buttons to... </span>
    <button mat-button
            (click)="tooltip.show()"
            aria-label="Show tooltip on the button at the end of this section"
            class="example-action-button">
      show
    </button>
    <button mat-button
            (click)="tooltip.hide()"
            aria-label="Hide tooltip on the button at the end of this section"
            class="example-action-button">
      hide
    </button>
    <button mat-button
            (click)="tooltip.toggle()"
            aria-label="Show/Hide tooltip on the button at the end of this section"
            class="example-action-button">
      toggle show/hide
    </button>
  </div>
  
  <button mat-raised-button #tooltip="matTooltip"
          matTooltip="Info about the action"
          matTooltipPosition="right"
          aria-tooltip="Button that displays and hides a tooltip triggered by other buttons">
    Action
    </button>`,

    TooltipDisabledHTML:
    `<button mat-raised-button
    matTooltip="Info about the action"
    [matTooltipDisabled]="disabled.value"
        aria-label="Button that displays a tooltip that can be programmatically disabled">
    Action
    </button>

    <mat-checkbox [formControl]="disabled" class="example-disabled-checkbox">
    Tooltip disabled
    </mat-checkbox>`,
    TooltipDisabledTS:
    `disabled = new FormControl(false);`,

    TooltipShowHideDelayHTML:
    `<mat-form-field class="example-user-input" appearance="fill">
    <mat-label>Show delay</mat-label>
    <input matInput type="number" [formControl]="showDelay"
           aria-label="Adds a delay between hovering over the button and displaying the tooltip">
    <mat-hint>milliseconds</mat-hint>
  </mat-form-field>
  
  <mat-form-field class="example-user-input" appearance="fill">
    <mat-label>Hide delay</mat-label>
    <input matInput type="number" [formControl]="hideDelay"
           aria-label="Adds a delay between hovering away from the button and hiding the tooltip">
    <mat-hint>milliseconds</mat-hint>
  </mat-form-field>
  
  <button mat-raised-button matTooltip="Info about the action"
          [matTooltipShowDelay]="showDelay.value"
          [matTooltipHideDelay]="hideDelay.value"
          aria-label="Button that displays a tooltip with a customized delay in showing and hiding">
    Action
    </button>`,
    TooltipShowHideDelayTS:
    `showDelay = new FormControl(1000);
    hideDelay = new FormControl(2000);`,


    TooltipAutoHidingClipsOutScrollingContainerHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Tooltip position</mat-label>
    <mat-select [formControl]="position">
      <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">
        {{positionOption}}
      </mat-option>
    </mat-select>
  </mat-form-field>
  
  <div class="example-container" cdkScrollable>
    <button mat-raised-button #tooltip="matTooltip"
            matTooltip="Info about the action"
            [matTooltipPosition]="position.value!"
            matTooltipHideDelay="100000"
            aria-label="Button that displays a tooltip that hides when scrolled out of the container"
            class="example-button">
      Action
    </button>
    </div>`,
    TooltipAutoHidingClipsOutScrollingContainerTS:
    `positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
    position = new FormControl(this.positionOptions[0]);`,

    TooltipWithShowHideDelay2HTML:
    `<button mat-raised-button
    matTooltip="By default, I delay"
    aria-label="Button that displays a tooltip that has custom delays through a default config">
    Button with delay-default tooltip
    </button>`,
    TooltipWithShowHideDelay2TS:
    `import {Component} from '@angular/core';
    import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';
    
    /** Custom options the configure the tooltip's default show/hide delays. */
    export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
      showDelay: 1000,
      hideDelay: 1000,
      touchendHideDelay: 1000,
    };
    
    @Component({
      selector: 'app-tooltip-with-show-hide-delay2',
      templateUrl: './tooltip-with-show-hide-delay.component.html',
      styleUrls: ['./tooltip-with-show-hide-delay.component.scss'],
      providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
    })`,

    TooltipCanHaveCustomClassHTML:
    `<button mat-raised-button
    matTooltip="Info about the action"
    matTooltipClass="example-tooltip-uppercase"
    aria-label="Button that shows a red tooltip"
    class="example-button">
Uppercase-tooltip Action
    </button>`,
    TooltipCanHaveCustomClassTS:
    `import {Component, ViewEncapsulation} from '@angular/core';
    @Component({
      selector: 'tooltip-custom-class-example',
      templateUrl: 'tooltip-custom-class-example.html',
      styleUrls: ['tooltip-custom-class-example.css'],
      encapsulation: ViewEncapsulation.None,
    })
    `,
    TooltipCanHaveCustomClassCSS:
    `.example-button {
      margin-top: 16px;
    }
    
    .example-tooltip-uppercase {
      text-transform: uppercase;
    }`
}