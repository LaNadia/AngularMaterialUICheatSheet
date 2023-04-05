export const ProgressBarData: any  ={

    QueryProgressBar:
    `<mat-progress-bar mode="query"></mat-progress-bar>`,


    IndeterminateProgressBar:
    `<mat-progress-bar mode="indeterminate"></mat-progress-bar>`,

    DeterminateProgressBar:
    `<mat-progress-bar mode="determinate" value="40"></mat-progress-bar>`,

    BufferProgressBar:
    `<mat-progress-bar mode="buffer"></mat-progress-bar>`,

    ConfigurableProgressBarHTML:
    `<mat-card class="example-card">
    <mat-card-content>
      <h2 class="example-h2">Progress bar configuration</h2>
  
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
          <mat-radio-button class="example-margin" value="buffer">
            Buffer
          </mat-radio-button>
          <mat-radio-button class="example-margin" value="query">
            Query
          </mat-radio-button>
        </mat-radio-group>
      </section>
  
      <section class="example-section" *ngIf="mode === 'determinate' || mode === 'buffer'">
        <label class="example-margin">Progress:</label>
        <mat-slider class="example-margin">
          <input type="range" [(ngModel)]="value" matSliderThumb>
        </mat-slider>
      </section>
      <section class="example-section" *ngIf="mode === 'buffer'">
        <label class="example-margin">Buffer:</label>
        <mat-slider class="example-margin">
          <input type="range" [(ngModel)]="bufferValue" matSliderThumb>
        </mat-slider>
      </section>
    </mat-card-content>
  </mat-card>
  
  <mat-card class="example-card">
    <mat-card-content>
      <h2 class="example-h2">Result</h2>
  
      <section class="example-section">
        <mat-progress-bar
            class="example-margin"
            [color]="color"
            [mode]="mode"
            [value]="value"
            [bufferValue]="bufferValue">
        </mat-progress-bar>
      </section>
    </mat-card-content>
  </mat-card>`,

  ConfigurableProgressBarTS:
  `color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;`

}


               