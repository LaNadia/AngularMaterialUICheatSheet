import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { slideToggleData } from './slideToggleData';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {

  BasicSlideTogglesHTML: string = slideToggleData.BasicSlideTogglesHTML; 
  ConfigurableSlideToggleHTML: string = slideToggleData.ConfigurableSlideToggleHTML; 
  ConfigurableSlideToggleTS: string = slideToggleData.ConfigurableSlideToggleTS; 
  SlideToggleWithFormsHTML: string = slideToggleData.SlideToggleWithFormsHTML; 
  SlideToggleWithFormsTS: string = slideToggleData.SlideToggleWithFormsTS; 


  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder) {}

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
