import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { datepickerData } from './datepickerData';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {


basicDatepicker: string = datepickerData.basicDatepicker;
BasicDateRangePicker: string = datepickerData.BasicDateRangePicker;
DatepickerStartDateHTML: string = datepickerData.DatepickerStartDateHTML;
DatepickerStartDateTS: string = datepickerData.DatepickerStartDateTS;
DatepickerExclundingWeekdaysHTML: string = datepickerData.DatepickerExclundingWeekdaysHTML;
DatepickerExclundingWeekdaysTS: string = datepickerData.DatepickerExclundingWeekdaysTS;
DatepickerMinMaxPeriodHTML: string = datepickerData.DatepickerMinMaxPeriodHTML;
DatepickerMinMaxPeriodTS: string = datepickerData.DatepickerMinMaxPeriodTS;
DatepickerActionButtons: string = datepickerData.DatepickerActionButtons;
DatepickerOpenMethod: string = datepickerData.DatepickerOpenMethod;
DatepickerPaletteColors: string = datepickerData.DatepickerPaletteColors;
DatepickerWithCustomIcon: string = datepickerData.DatepickerWithCustomIcon;
DisabledDatepicker: string = datepickerData.DisabledDatepicker;
DatepickerInputChangeEventsHTML: string = datepickerData.DatepickerInputChangeEventsHTML;
DatepickerInputChangeEventsTS: string = datepickerData.DatepickerInputChangeEventsTS;
DatepickerInlineCalendarExampleHTML: string = datepickerData.DatepickerInlineCalendarExampleHTML;
DatepickerInlineCalendarExampleTS: string = datepickerData.DatepickerInlineCalendarExampleTS;
DatepickerTouchUI: string = datepickerData.DatepickerTouchUI;
DatepickerSelectedValueHTML: string = datepickerData.DatepickerSelectedValueHTML;
DatepickerSelectedValueTS: string = datepickerData.DatepickerSelectedValueTS;
DatePickerComparisonRangesHTML: string = datepickerData.DatePickerComparisonRangesHTML;
DatePickerComparisonRangesTS: string = datepickerData.DatePickerComparisonRangesTS;
DatePickerFormsIntegrationHTML: string = datepickerData.DatePickerFormsIntegrationHTML;
DatePickerFormsIntegrationTS: string = datepickerData.DatePickerFormsIntegrationTS;



  startDate = new Date(1990, 0, 1);

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };


  minDate: Date;
  maxDate: Date;

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  selected!: Date | null;

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());


  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
