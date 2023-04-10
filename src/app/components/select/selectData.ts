export const selectData: any  ={

    BasicSelectHTML:
    `<mat-form-field appearance="fill">
      <mat-label>Favorite food</mat-label>
      <mat-select>
        <mat-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>`,
    BasicSelectTS:
    `  
    interface Food {
      value: string;
      viewValue: string;
    }
    
    foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
    ];`,

    SelectWithOptionGroupsHTML:
    `<mat-form-field appearance="fill">
      <mat-label>Pokemon</mat-label>
      <mat-select [formControl]="pokemonControl">
        <mat-option>-- None --</mat-option>
        <mat-optgroup *ngFor="let group of pokemonGroups" [label]="group.name"
                      [disabled]="group.disabled">
          <mat-option *ngFor="let pokemon of group.pokemon" [value]="pokemon.value">
            {{pokemon.viewValue}}
          </mat-option>
        </mat-optgroup>
      </mat-select>
    </mat-form-field>`,
    SelectWithOptionGroupsTS:
    `interface Pokemon {
        value: string;
        viewValue: string;
      }
      
      interface PokemonGroup {
        disabled?: boolean;
        name: string;
        pokemon: Pokemon[];
      }
      
      pokemonControl = new FormControl('');
      pokemonGroups: PokemonGroup[] = [
        {
          name: 'Grass',
          pokemon: [
            {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
            {value: 'oddish-1', viewValue: 'Oddish'},
            {value: 'bellsprout-2', viewValue: 'Bellsprout'},
          ],
        },
        {
          name: 'Water',
          pokemon: [
            {value: 'squirtle-3', viewValue: 'Squirtle'},
            {value: 'psyduck-4', viewValue: 'Psyduck'},
            {value: 'horsea-5', viewValue: 'Horsea'},
          ],
        },
        {
          name: 'Fire',
          disabled: true,
          pokemon: [
            {value: 'charmander-6', viewValue: 'Charmander'},
            {value: 'vulpix-7', viewValue: 'Vulpix'},
            {value: 'flareon-8', viewValue: 'Flareon'},
          ],
        },
        {
          name: 'Psychic',
          pokemon: [
            {value: 'mew-9', viewValue: 'Mew'},
            {value: 'mewtwo-10', viewValue: 'Mewtwo'},
          ],
        },
      ];`,

    SelectMultipleSelectionHTML:
    `<mat-form-field appearance="fill">
      <mat-label>Toppings</mat-label>
      <mat-select [formControl]="toppings" multiple>
        <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
      </mat-select>
    </mat-form-field>`, 
    SelectMultipleSelectionTS:
    `toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];`,
    
    SelectWithCustomTriggerTextHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Toppings</mat-label>
    <mat-select [formControl]="toppings" multiple>
      <mat-select-trigger>
        {{toppings.value?.[0] || ''}}
        <span *ngIf="(toppings.value?.length || 0) > 1" class="example-additional-selection">
          (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})
        </span>
      </mat-select-trigger>
      <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
    </mat-select>
    </mat-form-field>`,
    SelectWithCustomTriggerTextTS:
    `toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];`,

    DisabledSelectHTML:
    `<p>
    <mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox>
  </p>
  
  <mat-form-field appearance="fill">
    <mat-label>Choose an option</mat-label>
    <mat-select [disabled]="disableSelect.value">
      <mat-option value="option1">Option 1</mat-option>
      <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>
      <mat-option value="option3">Option 3</mat-option>
    </mat-select>
     </mat-form-field>`,
    DisabledSelectTS:
    ` disableSelect = new FormControl(false);`,

    SelectWithCustomErrorStateMatcherHTML:
      `<mat-form-field appearance="fill">
        <mat-label>Choose one</mat-label>
        <mat-select [formControl]="selected" [errorStateMatcher]="matcher">
          <mat-option>Clear</mat-option>
          <mat-option value="valid">Valid option</mat-option>
          <mat-option value="invalid">Invalid option</mat-option>
        </mat-select>
        <mat-hint>Errors appear instantly!</mat-hint>
        <mat-error *ngIf="selected.hasError('required')">You must make a selection</mat-error>
        <mat-error *ngIf="selected.hasError('pattern') && !selected.hasError('required')">
          Your selection is invalid
        </mat-error>
      </mat-form-field>`,
    SelectWithCustomErrorStateMatcherTS:
    `export class MyErrorStateMatcher implements ErrorStateMatcher {
        isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
          const isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }
      
      selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

      selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
    
    matcher = new MyErrorStateMatcher();`,

    BasicSelectQithInitialValueAndNoFormHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Favorite Food</mat-label>
    <mat-select [(value)]="selectedFood">
      <mat-option></mat-option>
      <mat-option [value]="option.value" *ngFor="let option of foods">{{ option.viewValue }}</mat-option>
        </mat-select>
    </mat-form-field>
    <p>You selected: {{selectedFood}}</p>`,
    BasicSelectQithInitialValueAndNoFormTS:
    `foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ];
      selectedFood = this.foods[2].value;`,

    SelectInAFormHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Favorite food</mat-label>
    <mat-select [(ngModel)]="selectedValue" name="food">
      <mat-option *ngFor="let food of foods" [value]="food.value">
        {{food.viewValue}}
      </mat-option>
    </mat-select>
  </mat-form-field>
    <p> Selected food: {{selectedValue}} </p>`,
    SelectInAFormTS:
    ` selectedValue: string;
  
    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ];`,

    SelectWithFormFieldFeaturesHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Favorite animal</mat-label>
    <mat-select [formControl]="animalControl" required>
      <mat-option>--</mat-option>
      <mat-option *ngFor="let animal of animals" [value]="animal">
        {{animal.name}}
      </mat-option>
    </mat-select>
    <mat-error *ngIf="animalControl.hasError('required')">Please choose an animal</mat-error>
    <mat-hint>{{animalControl.value?.sound}}</mat-hint>
    </mat-form-field>`,
    SelectWithFormFieldFeaturesTS:
    `interface Animal {
        name: string;
        sound: string;
      }
      
    animalControl = new FormControl<Animal | null>(null, Validators.required);
   
    animals: Animal[] = [
      {name: 'Dog', sound: 'Woof!'},
      {name: 'Cat', sound: 'Meow!'},
      {name: 'Cow', sound: 'Moo!'},
      {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];`,

    SelectInAReactiveFormHTML:
    `<form [formGroup]="form">
    <h4>mat-select</h4>
    <mat-form-field appearance="fill">
      <mat-label>Favorite Food</mat-label>
      <mat-select [formControl]="foodControl" name="food">
        <mat-option>None</mat-option>
        <mat-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <p>Selected: {{foodControl.value}}</p>
    <h4>Native select</h4>
    <mat-form-field appearance="fill">
      <mat-label>Favorite Car</mat-label>
      <select matNativeControl [formControl]="carControl" name="car">
        <option value="">None</option>
        <option *ngFor="let car of cars" [value]="car.value">
          {{car.viewValue}}
        </option>
      </select>
    </mat-form-field>
    <p>Selected: {{carControl.value}}</p>
    </form>`,
    SelectInAReactiveFormTS:
    ` foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'},
      ];
     
      foodControl = new FormControl(this.foods[2].value);
      form = new FormGroup({
        food: this.foodControl
    });`,

    Select2WayValueBindingHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Select an option</mat-label>
    <mat-select [(value)]="selected">
      <mat-option>None</mat-option>
      <mat-option value="option1">Option 1</mat-option>
      <mat-option value="option2">Option 2</mat-option>
      <mat-option value="option3">Option 3</mat-option>
        </mat-select>
    </mat-form-field>
  
    <p>You selected: {{selected}}</p>`,
    Select2WayValueBindingTS:
    `selected = 'option2';`,

    SelectWithResetOptionHTML:
    `<mat-form-field appearance="fill">
    <mat-label>State</mat-label>
    <mat-select>
      <mat-option>None</mat-option>
      <mat-option *ngFor="let state of states" [value]="state">{{state}}</mat-option>
    </mat-select>
     </mat-form-field>`,
    SelectWithResetOptionTS:
     ` states: string[] = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ];`,
    




}