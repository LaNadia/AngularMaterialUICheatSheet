export const ProgressSpinnerData: any  ={

    basicCheckboxesHTML:
    `<section class="example-section">
    <mat-checkbox class="example-margin">Check me!</mat-checkbox>
    <mat-checkbox class="example-margin" [disabled]="true">Disabled</mat-checkbox>
    </section>

    <section class="example-section">
    <span class="example-list-section">
    <mat-checkbox class="example-margin"
                    [checked]="allComplete"
                    [color]="task.color"
                    [indeterminate]="someComplete()"
                    (change)="setAll($event.checked)">
        {{task.name}}
    </mat-checkbox>
    </span>
    <span class="example-list-section">
    <ul>
        <li *ngFor="let subtask of task.subtasks">
        <mat-checkbox [(ngModel)]="subtask.completed"
                        [color]="subtask.color"
                        (ngModelChange)="updateAllComplete()">
            {{subtask.name}}
        </mat-checkbox>
        </li>
    </ul>
    </span>
    </section>`,
    basicCheckboxesTS:
    `task: any = {
        name: 'Indeterminate',
        completed: false,
        color: 'primary',
        subtasks: [
          {name: 'Primary', completed: false, color: 'primary'},
          {name: 'Accent', completed: false, color: 'accent'},
          {name: 'Warn', completed: false, color: 'warn'},
        ],
      };
    
      allComplete: boolean = false;
    
      updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every((t: any) => t.completed);
      }
    
      someComplete(): boolean {
        if (this.task.subtasks == null) {
          return false;
        }
        return this.task.subtasks.filter((t: any) => t.completed).length > 0 && !this.allComplete;
      }
    
      setAll(completed: boolean) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
          return;
        }
        this.task.subtasks.forEach((t: any) => (t.completed = completed));
      }`,

      ConfigurableCheckboxHTML:
      `<mat-card>
      <mat-card-content>
        <h2 class="example-h2">Checkbox configuration</h2>
    
        <section class="example-section">
          <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
          <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
        </section>
    
        <section class="example-section">
          <label class="example-margin">Align:</label>
          <mat-radio-group [(ngModel)]="labelPosition">
            <mat-radio-button class="example-margin" value="after">After</mat-radio-button>
            <mat-radio-button class="example-margin" value="before">Before</mat-radio-button>
          </mat-radio-group>
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
          <mat-checkbox
              class="example-margin"
              [(ngModel)]="checked"
              [(indeterminate)]="indeterminate"
              [labelPosition]="labelPosition"
              [disabled]="disabled">
            I'm a checkbox
          </mat-checkbox>
        </section>
      </mat-card-content>
    </mat-card>`,

    ConfigurableCheckboxTS:
    ` checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    disabled = false;`,

    
    CheckboxerReactiveFormsHTML: 
    `<section class="example-section" [formGroup]="toppings">
    <h4>Select your toppings:</h4>
    <p><mat-checkbox formControlName="pepperoni">Pepperoni</mat-checkbox></p>
    <p><mat-checkbox formControlName="extracheese">Extra Cheese</mat-checkbox></p>
    <p><mat-checkbox formControlName="mushroom">Mushroom</mat-checkbox></p>
  </section>
  
  <section class="example-section" [formGroup]="toppings">
    <h4>You chose:</h4>
    {{toppings.value | json}}
  </section>`,
  CheckboxerReactiveFormsTS: 
  `toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) {}`,


}