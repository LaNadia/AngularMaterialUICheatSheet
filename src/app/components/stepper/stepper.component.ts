import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { stepperData } from './stepperData';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class StepperComponent {

  StepperResponsiveHTML: string = stepperData.StepperResponsiveHTML;
  StepperResponsiveTS: string = stepperData.StepperResponsiveHTML;
  StepperResponsiveCSS: string = stepperData.StepperResponsiveHTML;

  StepperVerticalHTML: string = stepperData.StepperResponsiveHTML;
  StepperVerticalTS: string = stepperData.StepperResponsiveHTML;

  StepperOptionalStepsHTML: string = stepperData.StepperResponsiveHTML;
  StepperOptionalStepsTS: string = stepperData.StepperResponsiveHTML;

  StepperLazyContentRenderingHTML: string = stepperData.StepperResponsiveHTML;

  StepperLabelBottomPositionHTML: string = stepperData.StepperResponsiveHTML;
  StepperLabelBottomPositionTS: string = stepperData.StepperResponsiveHTML;

  StepperHeaderPositionHTML: string = stepperData.StepperResponsiveHTML;
  StepperHeaderPositionTS: string = stepperData.StepperResponsiveHTML;

  StepperDisplaysErrorsHTML: string = stepperData.StepperResponsiveHTML;
  StepperDisplaysErrorsTS: string = stepperData.StepperResponsiveHTML;

  StepperEditableStepsHTML: string = stepperData.StepperResponsiveHTML;
  StepperEditableStepsTS: string = stepperData.StepperResponsiveHTML;
  
  StepperAnimationsHTML: string = stepperData.StepperResponsiveHTML;
  StepperAnimationsTS: string = stepperData.StepperResponsiveHTML;
  
  StepperCustomizedStatesHTML: string = stepperData.StepperResponsiveHTML;
  StepperCustomizedStatesTS: string = stepperData.StepperResponsiveHTML;

  //Stepper responsive
  firstFormGroup1 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup1 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup1 = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  //Stepper vertical
  firstFormGroup2 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup2 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  //Stepper with optional steps (address)
  firstFormGroup3 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup3 = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = false;

  //Stepper label bottom position
  firstFormGroup4 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup4 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  //Stepper header position
  firstFormGroup5 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup5 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  //Stepper that displays errors in the steps
  firstFormGroup6 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup6 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  //Stepper with editable steps
  firstFormGroup7 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup7 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  //Stepper animations

  firstFormGroup8: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup8: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  //Stepper with customized states
  firstFormGroup9 = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup9 = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

}
