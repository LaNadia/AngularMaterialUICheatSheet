export const slideToggleData: any  ={
    
    BasicSlideTogglesHTML:
    `<mat-slide-toggle>Slide me!</mat-slide-toggle>`,

    ConfigurableSlideToggleHTML:
    `<mat-card>
    <mat-card-content>
      <h2 class="example-h2">Slider configuration</h2>
  
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
        <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
      </section>
  
      <section class="example-section">
        <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
      </section>
    </mat-card-content>
  </mat-card>
  
  <mat-card class="result">
    <mat-card-content>
      <h2 class="example-h2">Result</h2>
  
      <section class="example-section">
        <mat-slide-toggle
            class="example-margin"
            [color]="color"
            [checked]="checked"
            [disabled]="disabled">
          Slide me!
        </mat-slide-toggle>
      </section>
    </mat-card-content>
    </mat-card>`,
    ConfigurableSlideToggleTS:
    `color: ThemePalette = 'accent';
    checked = false;
    disabled = false;`,

    SlideToggleWithFormsHTML:
    `<p>Slide Toggle using a simple NgModel.</p>

    <mat-slide-toggle [(ngModel)]="isChecked">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>
    
    <p>Slide Toggle inside of a Template-driven form</p>
    
    <form class="example-form" #form="ngForm" (ngSubmit)="alertFormValues(form.form)">
    
      <mat-slide-toggle ngModel name="enableWifi">Enable Wifi</mat-slide-toggle>
      <mat-slide-toggle ngModel name="acceptTerms" required>Accept Terms of Service</mat-slide-toggle>
    
      <button mat-raised-button type="submit">Save Settings</button>
    </form>
    
    <p>Slide Toggle inside of a Reactive form</p>
    
    <form class="example-form" [formGroup]="formGroup" (ngSubmit)="alertFormValues(formGroup)" ngNativeValidate>
    
      <mat-slide-toggle formControlName="enableWifi">Enable Wifi</mat-slide-toggle>
      <mat-slide-toggle formControlName="acceptTerms">Accept Terms of Service</mat-slide-toggle>
    
      <p>Form Group Status: {{formGroup.status}}</p>
    
      <button mat-raised-button type="submit">Save Settings</button>
    </form>`,
    SlideToggleWithFormsTS:
    ` isChecked = true;
    formGroup = this._formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue],
    });
  
    constructor(private _formBuilder: FormBuilder) {}
  
    alertFormValues(formGroup: FormGroup) {
      alert(JSON.stringify(formGroup.value, null, 2));
    }`,




}