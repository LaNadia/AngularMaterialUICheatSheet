export const stepperData: any  ={

    StepperResponsiveHTML:
    `<ng-container [ngSwitch]="stepperOrientation | async">
    <div *ngSwitchCase="'horizontal'">Make your screen smaller to see a vertical stepper</div>
    <div *ngSwitchCase="'vertical'">Make your screen larger to see a horizontal stepper</div>
  </ng-container>
  
  <mat-stepper
    class="example-stepper"
    [orientation]="(stepperOrientation | async)!">
    <mat-step [stepControl]="firstFormGroup" label="Fill out your name">
      <form [formGroup]="firstFormGroup">
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
      <form [formGroup]="secondFormGroup">
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                 required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="thirdFormGroup" label="Fill out your phone number">
      <form [formGroup]="thirdFormGroup">
        <mat-form-field appearance="fill">
          <mat-label>Phone number</mat-label>
          <input matInput formControlName="thirdCtrl" placeholder="Ex. 12345678" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
      </div>
    </mat-step>
    </mat-stepper>`,
    StepperResponsiveTS:
    `import {Component} from '@angular/core';
    import {FormBuilder, Validators} from '@angular/forms';
    import {BreakpointObserver} from '@angular/cdk/layout';
    import {StepperOrientation} from '@angular/material/stepper';
    import {Observable} from 'rxjs';
    import {map} from 'rxjs/operators';
    
    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
      thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required],
      });
      stepperOrientation: Observable<StepperOrientation>;
    
      constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
        this.stepperOrientation = breakpointObserver
          .observe('(min-width: 800px)')
          .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      }
      `,
    StepperResponsiveCSS:
    `.example-stepper {
        margin-top: 8px;
      }
      
      .mat-mdc-form-field {
        margin-top: 16px;
      }`,

    StepperVerticalHTML:
    `<button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
      {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
    </button>
    <mat-stepper orientation="vertical" [linear]="isLinear" #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Fill out your name</ng-template>
          <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
          </mat-form-field>
          <div>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup">
        <form [formGroup]="secondFormGroup">
          <ng-template matStepLabel>Fill out your address</ng-template>
          <mat-form-field appearance="fill">
            <mat-label>Address</mat-label>
            <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                   required>
          </mat-form-field>
          <div>
            <button mat-button matStepperPrevious>Back</button>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Done</ng-template>
        <p>You are now done.</p>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-stepper>`,
    StepperVerticalTS:
    `firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
      isLinear = false;
    
    constructor(private _formBuilder: FormBuilder) {}`,

    StepperOptionalStepsHTML:
    `<button mat-raised-button (click)="isOptional = !isOptional">
    {{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}
  </button>
  
  <mat-stepper linear #stepper>
    <mat-step [stepControl]="firstFormGroup">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" [optional]="isOptional">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                 required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
     </mat-stepper>`,
    StepperOptionalStepsTS:
    ` firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: '',
      });
      isOptional = false;
    
      constructor(private _formBuilder: FormBuilder) {}`,

    StepperLazyContentRenderingHTML:
    `<mat-stepper orientation="vertical">
    <mat-step>
      <ng-template matStepLabel>Step 1</ng-template>
      <ng-template matStepContent>
        <p>This content was rendered lazily</p>
        <button mat-button matStepperNext>Next</button>
      </ng-template>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Step 2</ng-template>
      <ng-template matStepContent>
        <p>This content was also rendered lazily</p>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </ng-template>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Step 3</ng-template>
      <p>This content was rendered eagerly</p>
      <button mat-button matStepperPrevious>Back</button>
    </mat-step>
    </mat-stepper>`,

    StepperLabelBottomPositionHTML:
    `<mat-stepper labelPosition="bottom" #stepper>
    <mat-step [stepControl]="firstFormGroup">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" optional>
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                 required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
    </mat-stepper>`,
    StepperLabelBottomPositionTS:
    ` firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });`,

    StepperHeaderPositionHTML:
    `<mat-stepper headerPosition="bottom" #stepper>
    <mat-step [stepControl]="firstFormGroup">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" optional>
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field>
          <input matInput placeholder="Address" formControlName="secondCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      You are now done.
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
    </mat-stepper>`,
    StepperHeaderPositionTS:
    ` firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
    `,

    StepperDisplaysErrorsHTML:
    `<mat-stepper #stepper>
    <mat-step [stepControl]="firstFormGroup" errorMessage="Name is required.">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <p>Go to a different step to see the error state</p>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" errorMessage="Address is required.">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input matInput placeholder="Ex. 1 Main St, New York, NY" formControlName="secondCtrl"
                 required>
        </mat-form-field>
        <div>
          <p>Go to a different step to see the error state</p>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
    </mat-stepper>`,
    StepperDisplaysErrorsTS:
    `import {Component} from '@angular/core';
    import {FormBuilder, Validators} from '@angular/forms';
    import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
    
    @Component({
        selector: 'stepper-errors-example',
        templateUrl: 'stepper-errors-example.html',
        styleUrls: ['stepper-errors-example.css'],
        providers: [
          {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: {showError: true},
          },
        ],
      })
      export class StepperErrorsExample {
        firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required],
        });
        secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required],
        });
      
        constructor(private _formBuilder: FormBuilder) {}
    }`,

    StepperEditableStepsHTML:
    `<button mat-raised-button (click)="isEditable = !isEditable">
    {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}
  </button>
  
  <mat-stepper linear #stepper>
    <mat-step [stepControl]="firstFormGroup" [editable]="isEditable">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput formControlName="firstCtrl" placeholder="Last name, First name" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" [editable]="isEditable">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                 required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
    </mat-stepper>`,
    StepperEditableStepsTS:
    ` firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
      isEditable = false;
    
      constructor(private _formBuilder: FormBuilder) {}`,

    StepperAnimationsHTML:
    `<div class="example-input-wrapper">
    <label for="duration">Animation duration:</label>
    <input id="duration" value="2000" type="number" min="0" step="100" #duration>
  </div>
  
  <mat-vertical-stepper [linear]="false" #stepper [animationDuration]="duration.value">
    <mat-step [stepControl]="firstFormGroup">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field>
          <input matInput placeholder="Address" formControlName="secondCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      You are now done.
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
     </mat-vertical-stepper>`,
    StepperAnimationsTS:
    `import {Component} from '@angular/core';
    import {FormBuilder, FormGroup} from '@angular/forms';
    
    /**
     * @title Stepper animations
     */
    @Component({
      selector: 'stepper-animations-example',
      templateUrl: 'stepper-animations-example.html',
      styleUrls: ['stepper-animations-example.css'],
    })
    export class StepperAnimationsExample {
      constructor(private _formBuilder: FormBuilder) {}
      firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
      secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
    }`,

    StepperCustomizedStatesHTML:
    `<mat-stepper #stepper>
    <mat-step [stepControl]="firstFormGroup">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
                 required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
  </mat-stepper>
  
  <mat-stepper>
    <mat-step label="Step 1" state="phone">
      <p>Put down your phones.</p>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step label="Step 2" state="chat">
      <p>Socialize with each other.</p>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step label="Step 3">
      <p>You're welcome.</p>
    </mat-step>
  
    <!-- Icon overrides. -->
    <ng-template matStepperIcon="phone">
      <mat-icon>call_end</mat-icon>
    </ng-template>
    <ng-template matStepperIcon="chat">
      <mat-icon>forum</mat-icon>
    </ng-template>
    </mat-stepper>`,
    StepperCustomizedStatesTS:
    `import {Component} from '@angular/core';
    import {FormBuilder, Validators} from '@angular/forms';
    import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
    
    /**
     * @title Stepper with customized states
     */
    @Component({
      selector: 'stepper-states-example',
      templateUrl: 'stepper-states-example.html',
      styleUrls: ['stepper-states-example.css'],
      providers: [
        {
          provide: STEPPER_GLOBAL_OPTIONS,
          useValue: {displayDefaultIndicatorType: false},
        },
      ],
    })
    export class StepperStatesExample {
      firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
    
      constructor(private _formBuilder: FormBuilder) {}
    }`,


}