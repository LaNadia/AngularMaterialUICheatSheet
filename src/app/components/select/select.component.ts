import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { selectData } from './selectData';

interface Food {
  value: string;
  viewValue: string;
}

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

interface Animal {
  name: string;
  sound: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  BasicSelectHTML: string = selectData.BasicSelectHTML;
  BasicSelectTS: string = selectData.BasicSelectTS;
  SelectWithOptionGroupsHTML: string = selectData.SelectWithOptionGroupsHTML;
  SelectWithOptionGroupsTS: string = selectData.SelectWithOptionGroupsTS;
  SelectMultipleSelectionHTML: string = selectData.SelectMultipleSelectionHTML;
  SelectMultipleSelectionTS: string = selectData.SelectMultipleSelectionTS;
  SelectWithCustomTriggerTextHTML: string = selectData.SelectWithCustomTriggerTextHTML;
  SelectWithCustomTriggerTextTS: string = selectData.SelectWithCustomTriggerTextTS;
  DisabledSelectHTML: string = selectData.DisabledSelectHTML;
  DisabledSelectTS: string = selectData.DisabledSelectTS;
  SelectWithCustomErrorStateMatcherHTML: string = selectData.SelectWithCustomErrorStateMatcherHTML;
  SelectWithCustomErrorStateMatcherTS: string = selectData.SelectWithCustomErrorStateMatcherTS;
  BasicSelectQithInitialValueAndNoFormHTML: string = selectData.BasicSelectQithInitialValueAndNoFormHTML;
  BasicSelectQithInitialValueAndNoFormTS: string = selectData.BasicSelectQithInitialValueAndNoFormTS;
  SelectInAFormHTML: string = selectData.SelectInAFormHTML;
  SelectInAFormTS: string = selectData.SelectInAFormTS;
  SelectWithFormFieldFeaturesHTML: string = selectData.SelectWithFormFieldFeaturesHTML;
  SelectWithFormFieldFeaturesTS: string = selectData.SelectWithFormFieldFeaturesTS;
  SelectInAReactiveFormHTML: string = selectData.SelectInAReactiveFormHTML;
  SelectInAReactiveFormTS: string = selectData.SelectInAReactiveFormTS;
  Select2WayValueBindingHTML: string = selectData.Select2WayValueBindingHTML;
  Select2WayValueBindingTS: string = selectData.Select2WayValueBindingTS;
  SelectWithResetOptionHTML: string = selectData.SelectWithResetOptionHTML;
  SelectWithResetOptionTS: string = selectData.SelectWithResetOptionTS;




  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

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
  ];

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  toppings2 = new FormControl('');

  toppingList2: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  disableSelect = new FormControl(false);


  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  matcher = new MyErrorStateMatcher();


  selectedValue!: string;
  selectedCar!: string;

  foods2: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  foods3: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  selectedFood = this.foods[2].value;

  animalControl = new FormControl<Animal | null>(null, Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  foods4: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
 
  foodControl = new FormControl(this.foods[2].value);
  form = new FormGroup({
    food: this.foodControl
  });

  selected2 = 'option2';

  states: string[] = [
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
  ];
}
