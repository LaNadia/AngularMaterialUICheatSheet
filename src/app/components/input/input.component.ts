import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { inputData } from './inputData';

class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  BasicInputsHTML: string = inputData.BasicInputsHTML;
  InputWithHintsHTML: string = inputData.InputWithHintsHTML;
  InputWithClearButtonHTML: string = inputData.InputWithClearButtonHTML;
  InputWithClearButtonTS: string = inputData.InputWithClearButtonTS;
  InputsWithPrefixesAndSuffixesHTML: string = inputData.InputsWithPrefixesAndSuffixesHTML;
  InputWithErrorMessagesHTML: string = inputData.InputWithErrorMessagesHTML;
  InputWithErrorMessagesTS: string = inputData.InputWithErrorMessagesTS;
  InputWithCustomErrorStateMatcherHTML: string = inputData.InputWithCustomErrorStateMatcherHTML;
  InputWithCustomErrorStateMatcherTS: string = inputData.InputWithCustomErrorStateMatcherTS;
  InputsInFormHTML: string = inputData.InputsInFormHTML;



  value = 'Clear me';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}
