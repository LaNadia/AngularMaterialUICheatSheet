export const formfieldData: any  ={

    SimpleFormfield:
    `<mat-form-field appearance="fill">
    <mat-label>Input</mat-label>
    <input matInput>
    </mat-form-field>
    <mat-form-field appearance="fill">
        <mat-label>Select</mat-label>
        <mat-select>
        <mat-option value="one">First option</mat-option>
        <mat-option value="two">Second option</mat-option>
        </mat-select>
    </mat-form-field>
    <mat-form-field appearance="fill">
        <mat-label>Textarea</mat-label>
        <textarea matInput></textarea>
    </mat-form-field>`,

    FormfieldThemingHTML:
    `<mat-form-field appearance="fill" [color]="colorControl.value!">
    <mat-label>Color</mat-label>
    <mat-select [formControl]="colorControl">
      <mat-option value="primary">Primary</mat-option>
      <mat-option value="accent">Accent</mat-option>
      <mat-option value="warn">Warn</mat-option>
    </mat-select>
    </mat-form-field>`,
    FormfieldThemingTS:
    `colorControl = new FormControl('primary' as ThemePalette);`,

    FormfieldPrefixSuffixHTML:
    `<div class="example-container">
    <mat-form-field appearance="fill">
        <mat-label>Enter your password</mat-label>
        <input matInput [type]="hide ? 'password' : 'text'">
            <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
            </button>
        </mat-form-field>

        <mat-form-field appearance="fill" floatLabel="always">
            <mat-label>Amount</mat-label>
            <input matInput type="number" class="example-right-align" placeholder="0">
            <span matTextPrefix>$&nbsp;</span>
            <span matTextSuffix>.00</span>
        </mat-form-field>
    </div>`,
    FormfieldPrefixSuffixTS:
    `hide = true;`,

    FormfieldWithHints:
    `<div class="example-container">
    <mat-form-field hintLabel="Max 10 characters" appearance="fill">
      <mat-label>Enter some input</mat-label>
      <input matInput #input maxlength="10" placeholder="Ex. Nougat">
      <mat-hint align="end">{{input.value.length}}/10</mat-hint>
    </mat-form-field>
  
        <mat-form-field appearance="fill">
        <mat-label>Select me</mat-label>
        <mat-select>
            <mat-option value="option">Option</mat-option>
        </mat-select>
        <mat-hint align="end">Here's the dropdown arrow ^</mat-hint>
        </mat-form-field>
    </div>`,

    FormfieldWithErrormessagesHTML:
    `<div class="example-container">
        <mat-form-field appearance="fill">
        <mat-label>Enter your email</mat-label>
        <input matInput placeholder="pat@example.com" [formControl]="email" required>
        <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
        </mat-form-field>
    </div>`,
    FormfieldWithErrormessagesTS:
    ` email = new FormControl('', [Validators.required, Validators.email]);

        getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
    
        return this.email.hasError('email') ? 'Not a valid email' : '';
    }`,

    FormfieldAppearanceVariants:
    `<p>
    <mat-form-field appearance="fill">
      <mat-label>Fill form field</mat-label>
        <input matInput placeholder="Placeholder">
        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
        <mat-hint>Hint</mat-hint>
        </mat-form-field>
    </p>
    <p>
        <mat-form-field appearance="outline">
        <mat-label>Outline form field</mat-label>
        <input matInput placeholder="Placeholder">
        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
        <mat-hint>Hint</mat-hint>
        </mat-form-field>
    </p>`,

    FormfieldWithLabelHTML:
    `<div class="example-container">
    <form [formGroup]="options">
      <mat-checkbox [formControl]="hideRequiredControl">Hide required marker</mat-checkbox>
      <div>
        <label>Float label: </label>
        <mat-radio-group [formControl]="floatLabelControl">
          <mat-radio-button value="auto">Auto</mat-radio-button>
          <mat-radio-button value="always">Always</mat-radio-button>
        </mat-radio-group>
      </div>
  
      <div class="example-form-fields">
        <mat-form-field appearance="fill"
            [hideRequiredMarker]="hideRequiredControl.value"
            [floatLabel]="getFloatLabelValue()">
          <input matInput placeholder="Simple placeholder" required>
        </mat-form-field>
  
        <mat-form-field appearance="fill" [floatLabel]="getFloatLabelValue()">
          <mat-label>Both a label and a placeholder</mat-label>
          <input matInput placeholder="Simple placeholder">
        </mat-form-field>
  
        <mat-form-field appearance="fill"
            [hideRequiredMarker]="hideRequiredControl.value"
            [floatLabel]="getFloatLabelValue()">
          <mat-select required>
            <mat-option>-- None --</mat-option>
                <mat-option value="option">Option</mat-option>
            </mat-select>
                <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>
                </mat-form-field>
            </div>
            </form>
    </div>`,
    FormfieldWithLabelTS:
    ` hideRequiredControl = new FormControl(false);
        floatLabelControl = new FormControl('auto' as FloatLabelType);
        options = this._formBuilder.group({
        hideRequired: this.hideRequiredControl,
        floatLabel: this.floatLabelControl,
        });
    
        constructor(private _formBuilder: FormBuilder) {}
    
        getFloatLabelValue(): FloatLabelType {
        return this.floatLabelControl.value || 'auto';
    }`,



}