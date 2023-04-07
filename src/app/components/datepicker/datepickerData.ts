
export const datepickerData: any = {

    basicDatepicker:
    `<mat-form-field appearance="fill">
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepicker]="picker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>`,

    BasicDateRangePicker:
    `<mat-form-field appearance="fill">
    <mat-label>Enter a date range</mat-label>
    <mat-date-range-input [rangePicker]="picker">
      <input matStartDate placeholder="Start date">
      <input matEndDate placeholder="End date">
    </mat-date-range-input>
    <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-date-range-picker #picker></mat-date-range-picker>
    </mat-form-field>`,

    DatepickerStartDateHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepicker]="picker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
    </mat-form-field>`,
    DatepickerStartDateTS:
    `startDate = new Date(1990, 0, 1);`,

    DatepickerExclundingWeekdaysHTML:
    `<mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepickerFilter]="myFilter" [matDatepicker]="picker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>`,
    DatepickerExclundingWeekdaysTS:
    ` myFilter = (d: Date | null): boolean => {
        const day = (d || new Date()).getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
    };`,

    DatepickerMinMaxPeriodHTML:
    `<mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Choose a date</mat-label>
    <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>`,
    DatepickerMinMaxPeriodTS:
    `minDate: Date;
    maxDate: Date;
  
    constructor() {
      // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear - 20, 0, 1);
      this.maxDate = new Date(currentYear + 1, 11, 31);
    }
  `,

  DatepickerActionButtons:
    `<mat-form-field appearance="fill" class="example-form-field">
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepicker]="datepicker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="datepicker"></mat-datepicker-toggle>
    <mat-datepicker #datepicker>
        <mat-datepicker-actions>
        <button mat-button matDatepickerCancel>Cancel</button>
        <button mat-raised-button color="primary" matDatepickerApply>Apply</button>
        </mat-datepicker-actions>
    </mat-datepicker>
    </mat-form-field>`,

    DatepickerOpenMethod:
    `<mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepicker]="picker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
  <button mat-raised-button (click)="picker.open()">Open</button>`,

  DatepickerPaletteColors:
  `<mat-form-field color="accent" appearance="fill">
  <mat-label>Inherited calendar color</mat-label>
  <input matInput [matDatepicker]="picker1">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker1"></mat-datepicker-toggle>
  <mat-datepicker #picker1></mat-datepicker>
    </mat-form-field>`,


  DatepickerWithCustomIcon:
    `<mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepicker]="picker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker">
    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>
    </mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>`,

    DisabledDatepicker:
    `<p>
    <mat-form-field appearance="fill">
      <mat-label>Completely disabled</mat-label>
      <input matInput [matDatepicker]="dp1" disabled>
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="dp1"></mat-datepicker-toggle>
      <mat-datepicker #dp1></mat-datepicker>
    </mat-form-field>
  </p>
  
  <p>
    <mat-form-field appearance="fill">
      <mat-label>Popup disabled</mat-label>
      <input matInput [matDatepicker]="dp2">
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="dp2" disabled></mat-datepicker-toggle>
      <mat-datepicker #dp2></mat-datepicker>
    </mat-form-field>
  </p>
  
  <p>
    <mat-form-field appearance="fill">
      <mat-label>Input disabled</mat-label>
      <input matInput [matDatepicker]="dp3" disabled>
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="dp3"></mat-datepicker-toggle>
      <mat-datepicker #dp3 disabled="false"></mat-datepicker>
    </mat-form-field>
  </p>`,

    DatepickerInputChangeEventsHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Input & change events</mat-label>
    <input matInput [matDatepicker]="picker"
           (dateInput)="addEvent('input', $event)" (dateChange)="addEvent('change', $event)">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
  
  <div class="example-events">
    <div *ngFor="let e of events">{{e}}</div>
  </div>`,

  DatepickerInputChangeEventsTS:
  `events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push('$ {type}: $ {event.value}');
  }`,

  DatepickerInlineCalendarExampleHTML:
  `<mat-card class="demo-inline-calendar-card">
  <mat-calendar [(selected)]="selected"></mat-calendar>
    </mat-card>
    <p>Selected date: {{selected}}</p>`,

  DatepickerInlineCalendarExampleTS:
    `selected: Date | null;`,

    DatepickerTouchUI:
    `<mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Choose a date</mat-label>
    <input matInput [matDatepicker]="picker">
    <mat-hint>MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker touchUi #picker></mat-datepicker>
  </mat-form-field>`,


DatepickerSelectedValueHTML:
  `<mat-form-field appearance="fill">
  <mat-label>Angular forms</mat-label>
  <input matInput [matDatepicker]="picker1" [formControl]="date">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker1"></mat-datepicker-toggle>
  <mat-datepicker #picker1></mat-datepicker>
</mat-form-field>

<mat-form-field appearance="fill">
  <mat-label>Angular forms (w/ deserialization)</mat-label>
  <input matInput [matDatepicker]="picker2"
         [formControl]="serializedDate">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>
  <mat-datepicker #picker2></mat-datepicker>
</mat-form-field>

<mat-form-field appearance="fill">
  <mat-label>Value binding</mat-label>
  <input matInput [matDatepicker]="picker3" [value]="date.value">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker3"></mat-datepicker-toggle>
  <mat-datepicker #picker3></mat-datepicker>
</mat-form-field>`,
DatepickerSelectedValueTS:
`date = new FormControl(new Date());
serializedDate = new FormControl(new Date().toISOString());`,


DatePickerComparisonRangesHTML:
`<mat-form-field class="example-form-field" appearance="fill">
<mat-label>First campaign</mat-label>
<mat-date-range-input
  [formGroup]="campaignOne"
  [rangePicker]="campaignOnePicker"
  [comparisonStart]="campaignTwo.value.start"
  [comparisonEnd]="campaignTwo.value.end">
  <input matStartDate placeholder="Start date" formControlName="start">
  <input matEndDate placeholder="End date" formControlName="end">
</mat-date-range-input>
<mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
<mat-datepicker-toggle matIconSuffix [for]="campaignOnePicker"></mat-datepicker-toggle>
<mat-date-range-picker #campaignOnePicker></mat-date-range-picker>
</mat-form-field>

<mat-form-field class="example-form-field" appearance="fill">
<mat-label>Second campaign</mat-label>
<mat-date-range-input
  [formGroup]="campaignTwo"
  [rangePicker]="campaignTwoPicker"
  [comparisonStart]="campaignOne.value.start"
  [comparisonEnd]="campaignOne.value.end">
  <input matStartDate placeholder="Start date" formControlName="start">
  <input matEndDate placeholder="End date" formControlName="end">
</mat-date-range-input>
<mat-datepicker-toggle matIconSuffix [for]="campaignTwoPicker"></mat-datepicker-toggle>
<mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
<mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>
</mat-form-field>`,
DatePickerComparisonRangesTS:
` today = new Date();
    month = this.today.getMonth();
    year = this.today.getFullYear();

    campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
    });
    campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
    });`,


DatePickerFormsIntegrationHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Enter a date range</mat-label>
    <mat-date-range-input [formGroup]="range" [rangePicker]="picker">
      <input matStartDate formControlName="start" placeholder="Start date">
      <input matEndDate formControlName="end" placeholder="End date">
    </mat-date-range-input>
    <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-date-range-picker #picker></mat-date-range-picker>
  
    <mat-error *ngIf="range.controls.start.hasError('matStartDateInvalid')">Invalid start date</mat-error>
    <mat-error *ngIf="range.controls.end.hasError('matEndDateInvalid')">Invalid end date</mat-error>
  </mat-form-field>
  
  <p>Selected range: {{range.value | json}}</p>`,

DatePickerFormsIntegrationTS:
  `range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });`,

}