import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { FloatLabelType } from '@angular/material/form-field';
import { formfieldData } from './formfieldData';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent {

  
  SimpleFormfield: string = formfieldData.SimpleFormfield;
  FormfieldThemingHTML: string = formfieldData.FormfieldThemingHTML;
  FormfieldThemingTS: string = formfieldData.FormfieldThemingTS;
  FormfieldPrefixSuffixHTML: string = formfieldData.FormfieldPrefixSuffixHTML;
  FormfieldPrefixSuffixTS: string = formfieldData.FormfieldPrefixSuffixTS;
  FormfieldWithHints: string = formfieldData.FormfieldWithHints;
  FormfieldWithErrormessagesHTML: string = formfieldData.FormfieldWithErrormessagesHTML;
  FormfieldWithErrormessagesTS: string = formfieldData.FormfieldWithErrormessagesTS;
  FormfieldAppearanceVariants: string = formfieldData.FormfieldAppearanceVariants;
  FormfieldWithLabelHTML: string = formfieldData.FormfieldWithLabelHTML;
  FormfieldWithLabelTS: string = formfieldData.FormfieldWithLabelTS;


  colorControl = new FormControl('primary' as ThemePalette);

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  };

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }



}
