export const sliderData: any  ={

    BasicSliderHTML:
    `<mat-slider>
    <input matSliderThumb>
    </mat-slider>`,

    RangeSliderHTML:
    `<mat-slider min="200" max="500">
    <input value="300" matSliderStartThumb>
    <input value="400" matSliderEndThumb>
     </mat-slider>`,

     SliderWithCustomThumbLabelFormattingHTML:
     `<mat-slider min="0" max="100000" step="1000" showTickMarks discrete [displayWith]="formatLabel">
     <input matSliderThumb>
    </mat-slider>`,
    SliderWithCustomThumbLabelFormattingTS:
    ` formatLabel(value: number): string {
        if (value >= 1000) {
          return Math.round(value / 1000) + 'k';
        }
    
        return '$ {value}';
      }`,


    ConfigurableSliderHTML:
    `<mat-card>
    <mat-card-content>
      <h2 class="example-h2">Slider configuration</h2>
  
      <section class="example-section">
        <mat-form-field class="example-margin example-width" appearance="fill">
          <mat-label>Value</mat-label>
          <input matInput type="number" [(ngModel)]="value">
        </mat-form-field>
        <mat-form-field class="example-margin example-width" appearance="fill">
          <mat-label>Min value</mat-label>
          <input matInput type="number" [(ngModel)]="min">
        </mat-form-field>
        <mat-form-field class="example-margin example-width" appearance="fill">
          <mat-label>Max value</mat-label>
          <input matInput type="number" [(ngModel)]="max">
        </mat-form-field>
        <mat-form-field class="example-margin example-width" appearance="fill">
          <mat-label>Step size</mat-label>
          <input matInput type="number" [(ngModel)]="step">
        </mat-form-field>
      </section>
  
      <section class="example-section">
        <mat-checkbox [(ngModel)]="showTicks">Show ticks</mat-checkbox>
      </section>
  
      <section class="example-section">
        <mat-checkbox [(ngModel)]="thumbLabel">Show thumb label</mat-checkbox>
      </section>
  
      <section class="example-section">
        <mat-checkbox [(ngModel)]="disabled">Disabled</mat-checkbox>
      </section>
    </mat-card-content>
  </mat-card>
  
  <mat-card class="example-result-card">
    <mat-card-content>
      <h2>Result</h2>
  
      <div class="example-label-container">
        <label id="example-name-label" class="example-name-label">Value</label>
        <label class="example-value-label">{{value}}</label>
      </div>
      <mat-slider
          class="example-margin"
          [disabled]="disabled"
          [max]="max"
          [min]="min"
          [step]="step"
          [discrete]="thumbLabel"
          [showTickMarks]="showTicks">
        <input matSliderThumb [(ngModel)]="value">
      </mat-slider>
    </mat-card-content>
    </mat-card>`,
    ConfigurableSliderTS:
    ` disabled = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;`


}