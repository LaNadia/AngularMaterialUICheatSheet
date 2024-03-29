export const ProgressSpinnerData: any  ={

    BasicProgressSpinner:
    `<mat-spinner></mat-spinner>`,

    DeterminateProgressSpinner:
    `<mat-progress-spinner value="50" color="accent"></mat-progress-spinner>`,
    
    ConfigurableProgressSpinnerHTML:
    ` <h2 class="example-h2">Progress spinner configuration</h2>
            
    <section class="example-section">
      <label class="example-margin">Color:</label>
      <mat-radio-group [(ngModel)]="color">
        <mat-radio-button class="example-margin" value="primary">
          Primary
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="accent">
          Accent
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="warn">
          Warn
        </mat-radio-button>
      </mat-radio-group>
    </section>

    <section class="example-section">
      <label class="example-margin">Mode:</label>
      <mat-radio-group [(ngModel)]="mode">
        <mat-radio-button class="example-margin" value="determinate">
          Determinate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="indeterminate">
          Indeterminate
        </mat-radio-button>
      </mat-radio-group>
    </section>

    <section class="example-section" *ngIf="mode === 'determinate'">
      <label class="example-margin">Progress:</label>
      <mat-slider class="example-margin">
        <input type="range" [(ngModel)]="value" matSliderThumb>
      </mat-slider>
    </section>
  
    <h2 class="example-h2">Result</h2>

    <mat-progress-spinner
        class="example-margin"
        [color]="color"
        [mode]="mode"
        [value]="value">
    </mat-progress-spinner>`,
    
    ConfigurableProgressSpinnerTS:
    `color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'determinate';
    value = 50;`,
    
}