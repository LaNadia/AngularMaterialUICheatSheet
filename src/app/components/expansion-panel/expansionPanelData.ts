export const expansionPanelData: any  ={

    basicExpansionPanelHTML:
    `<mat-accordion>
    <mat-expansion-panel hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-title>
          This is the expansion title
        </mat-panel-title>
        <mat-panel-description>
          This is a summary of the content
        </mat-panel-description>
      </mat-expansion-panel-header>
      <p>This is the primary content of the panel.</p>
    </mat-expansion-panel>
    <mat-expansion-panel (opened)="panelOpenState = true"
                         (closed)="panelOpenState = false">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Self aware panel
        </mat-panel-title>
        <mat-panel-description>
          Currently I am {{panelOpenState ? 'open' : 'closed'}}
        </mat-panel-description>
      </mat-expansion-panel-header>
      <p>I'm visible because I am open</p>
    </mat-expansion-panel>
    </mat-accordion>`,
    basicExpansionPanelTS:
    `panelOpenState = false;`,
    basicExpansionPanelCSS:
    `.mat-mdc-form-field + .mat-mdc-form-field {
      margin-left: 8px;
    }`,

    expansionPanelAsAccordionHTML:
    `<mat-accordion class="example-headers-align">
    <mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)" hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-title>
          Personal data
        </mat-panel-title>
        <mat-panel-description>
          Type your name and age
          <mat-icon>account_circle</mat-icon>
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <mat-form-field appearance="fill">
        <mat-label>First name</mat-label>
        <input matInput>
      </mat-form-field>
  
      <mat-form-field appearance="fill">
        <mat-label>Age</mat-label>
        <input matInput type="number" min="1">
      </mat-form-field>
      <mat-action-row>
        <button mat-button color="primary" (click)="nextStep()">Next</button>
      </mat-action-row>
    </mat-expansion-panel>
  
    <mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-title>
          Destination
        </mat-panel-title>
        <mat-panel-description>
          Type the country name
          <mat-icon>map</mat-icon>
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <mat-form-field appearance="fill">
        <mat-label>Country</mat-label>
        <input matInput>
      </mat-form-field>
  
      <mat-action-row>
        <button mat-button color="warn" (click)="prevStep()">Previous</button>
        <button mat-button color="primary" (click)="nextStep()">Next</button>
      </mat-action-row>
    </mat-expansion-panel>
  
    <mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)" hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-title>
          Day of the trip
        </mat-panel-title>
        <mat-panel-description>
          Inform the date you wish to travel
          <mat-icon>date_range</mat-icon>
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <mat-form-field appearance="fill">
        <mat-label>Date</mat-label>
        <input matInput [matDatepicker]="picker" (focus)="picker.open()" readonly>
      </mat-form-field>
      <mat-datepicker #picker></mat-datepicker>
  
      <mat-action-row>
        <button mat-button color="warn" (click)="prevStep()">Previous</button>
        <button mat-button color="primary" (click)="nextStep()">End</button>
      </mat-action-row>
    </mat-expansion-panel>
  
    </mat-accordion>`,
    expansionPanelAsAccordionTS:
    `  step = 0;

    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }`,
    expansionPanelAsAccordionCSS:
    `.example-headers-align .mat-expansion-panel-header-description {
      justify-content: space-between;
      align-items: center;
    }
    
    .example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {
      margin-left: 8px;
    }`,

    AccordionExpandCollapseHTML:
    `<div class="example-action-buttons">
    <button mat-button (click)="accordion.openAll()">Expand All</button>
    <button mat-button (click)="accordion.closeAll()">Collapse All</button>
  </div>
  <mat-accordion class="example-headers-align" multi>
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          Personal data
        </mat-panel-title>
        <mat-panel-description>
          Type your name and age
          <mat-icon>account_circle</mat-icon>
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <mat-form-field appearance="fill">
        <mat-label>First name</mat-label>
        <input matInput>
      </mat-form-field>
  
      <mat-form-field appearance="fill">
        <mat-label>Age</mat-label>
        <input matInput type="number" min="1">
      </mat-form-field>
  
    </mat-expansion-panel>
    <mat-expansion-panel disabled>
      <mat-expansion-panel-header>
        <mat-panel-title>
          Destination
        </mat-panel-title>
        <mat-panel-description>
          Type the country name
          <mat-icon>map</mat-icon>
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <mat-form-field appearance="fill">
        <mat-label>Country</mat-label>
        <input matInput>
      </mat-form-field>
    </mat-expansion-panel>
  
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          Day of the trip
        </mat-panel-title>
        <mat-panel-description>
          Inform the date you wish to travel
          <mat-icon>date_range</mat-icon>
        </mat-panel-description>
      </mat-expansion-panel-header>
  
      <mat-form-field appearance="fill">
        <mat-label>Date</mat-label>
        <input matInput [matDatepicker]="picker" (focus)="picker.open()" readonly>
      </mat-form-field>
      <mat-datepicker #picker></mat-datepicker>
    </mat-expansion-panel>
     </mat-accordion>`,
    AccordionExpandCollapseTS:
    `@ViewChild(MatAccordion) accordion: MatAccordion;`,
    AccordionExpandCollapseCSS:
    `.example-action-buttons {
      padding-bottom: 20px;
    }
    
    .example-headers-align .mat-expansion-panel-header-description {
      justify-content: space-between;
      align-items: center;
    }
    
    .example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {
      margin-left: 8px;
    }`,
  
  }