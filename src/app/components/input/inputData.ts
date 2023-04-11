export const inputData: any  ={

    BasicInputsHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Favorite food</mat-label>
      <input matInput placeholder="Ex. Pizza" value="Sushi">
    </mat-form-field>
  
    <mat-form-field class="example-full-width">
      <mat-label>Leave a comment</mat-label>
      <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
    </mat-form-field>
     </form>`,
  
    InputWithHintsHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Message</mat-label>
      <input matInput #message maxlength="256" placeholder="Ex. I need help with...">
      <mat-hint align="start"><strong>Don't disclose personal info</strong> </mat-hint>
      <mat-hint align="end">{{message.value.length}} / 256</mat-hint>
    </mat-form-field>
    </form>`,

    InputWithClearButtonHTML:
    `<mat-form-field class="example-form-field">
    <mat-label>Clearable input</mat-label>
    <input matInput type="text" [(ngModel)]="value">
    <button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
      <mat-icon>close</mat-icon>
    </button>
    </mat-form-field>`,
    InputWithClearButtonTS:
    `value = 'Clear me';`,

    InputsWithPrefixesAndSuffixesHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Telephone</mat-label>
      <span matPrefix>+1 &nbsp;</span>
      <input type="tel" matInput placeholder="555-555-1234">
      <mat-icon matSuffix>mode_edit</mat-icon>
    </mat-form-field>
    </form>`,

    InputWithErrorMessagesHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Email</mat-label>
      <input type="email" matInput [formControl]="emailFormControl" placeholder="Ex. pat@example.com">
      <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
        Please enter a valid email address
      </mat-error>
      <mat-error *ngIf="emailFormControl.hasError('required')">
        Email is <strong>required</strong>
      </mat-error>
    </mat-form-field>
    </form>`,
    InputWithErrorMessagesTS:
    `emailFormControl = new FormControl('', [Validators.required, Validators.email]);`,

    InputWithCustomErrorStateMatcherHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Email</mat-label>
      <input type="email" matInput [formControl]="emailFormControl" [errorStateMatcher]="matcher"
             placeholder="Ex. pat@example.com">
      <mat-hint>Errors appear instantly!</mat-hint>
      <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
        Please enter a valid email address
      </mat-error>
      <mat-error *ngIf="emailFormControl.hasError('required')">
        Email is <strong>required</strong>
      </mat-error>
    </mat-form-field>
    </form>`,
    InputWithCustomErrorStateMatcherTS:
    `export class MyErrorStateMatcher implements ErrorStateMatcher {
        isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
          const isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }
      
      emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    matcher = new MyErrorStateMatcher();`,

    InputsInFormHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Company (disabled)</mat-label>
      <input matInput disabled value="Google">
    </mat-form-field>
  
    <table class="example-full-width" cellspacing="0"><tr>
      <td><mat-form-field class="example-full-width">
        <mat-label>First name</mat-label>
        <input matInput>
      </mat-form-field></td>
      <td><mat-form-field class="example-full-width">
        <mat-label>Long Last Name That Will Be Truncated</mat-label>
        <input matInput>
      </mat-form-field></td>
    </tr></table>
  
    <p>
      <mat-form-field class="example-full-width">
        <mat-label>Address</mat-label>
        <textarea matInput placeholder="Ex. 100 Main St">1600 Amphitheatre Pkwy</textarea>
      </mat-form-field>
      <mat-form-field class="example-full-width">
        <mat-label>Address 2</mat-label>
        <textarea matInput></textarea>
      </mat-form-field>
    </p>
  
    <table class="example-full-width" cellspacing="0"><tr>
      <td><mat-form-field class="example-full-width">
        <mat-label>City</mat-label>
        <input matInput placeholder="Ex. San Francisco">
      </mat-form-field></td>
      <td><mat-form-field class="example-full-width">
        <mat-label>State</mat-label>
        <input matInput placeholder="Ex. California">
      </mat-form-field></td>
      <td><mat-form-field class="example-full-width">
        <mat-label>Postal Code</mat-label>
        <input matInput #postalCode maxlength="5" placeholder="Ex. 94105" value="94043">
        <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
      </mat-form-field></td>
    </tr></table>
    </form>`,

  }