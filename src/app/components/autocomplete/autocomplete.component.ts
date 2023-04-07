import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { autocompleteData } from './autocompleteData';


interface User {
  name: string;
}

 interface State {
  flag: string;
  name: string;
  population: string;
}

 interface StateGroup {
  letter: string;
  names: string[];
}


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit{


  SimpleAutocompleteHTML: string = autocompleteData.SimpleAutocompleteHTML;
  SimpleAutocompleteTS: string = autocompleteData.SimpleAutocompleteTS;
  PlainInputAutocompleteHTML: string = autocompleteData.PlainInputAutocompleteHTML;
  PlainInputAutocompleteTS: string = autocompleteData.PlainInputAutocompleteTS;
  AutocompleteOverviewHTML: string = autocompleteData.AutocompleteOverviewHTML;
  AutocompleteOverviewTS: string = autocompleteData.AutocompleteOverviewTS;
  OptionGroupsAutocompleteHTML: string = autocompleteData.OptionGroupsAutocompleteHTML;
  OptionGroupsAutocompleteTS: string = autocompleteData.OptionGroupsAutocompleteTS;
  FilterAutocompleteHTML: string = autocompleteData.FilterAutocompleteHTML;
  FilterAutocompleteTS: string = autocompleteData.FilterAutocompleteTS;
  DisplayValueAutocompleteHTML: string = autocompleteData.DisplayValueAutocompleteHTML;
  DisplayValueAutocompleteTS: string = autocompleteData.DisplayValueAutocompleteTS;




 
  ///Simple autocomplete
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  
  //Plain input autocomplete
  control = new FormControl('');
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets!: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


  ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    // //Option groups autocomplete
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );

    //Filter autocomplete
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter3(value || '')),
    );

    //Display value autocomplete (picked values)
    this.filteredOptions3 = this.myControl3.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter4(name as string) : this.options3.slice();
      }),
    );
  }


  // //Autocomplete overview

  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  // //Option groups autocomplete

    _filter2 = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();
  
    return opt.filter(item => item.toLowerCase().includes(filterValue));
  };
  
 
    stateForm = this._formBuilder.group({
      stateGroup: '',
    });
  
    stateGroups: StateGroup[] = [
      {
        letter: 'A',
        names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
      },
      {
        letter: 'C',
        names: ['California', 'Colorado', 'Connecticut'],
      },
      {
        letter: 'D',
        names: ['Delaware'],
      },
      {
        letter: 'F',
        names: ['Florida'],
      },
      {
        letter: 'G',
        names: ['Georgia'],
      },
      {
        letter: 'H',
        names: ['Hawaii'],
      },
      {
        letter: 'I',
        names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
      },
      {
        letter: 'K',
        names: ['Kansas', 'Kentucky'],
      },
      {
        letter: 'L',
        names: ['Louisiana'],
      },
      {
        letter: 'M',
        names: [
          'Maine',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
        ],
      },
      {
        letter: 'N',
        names: [
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
        ],
      },
      {
        letter: 'O',
        names: ['Ohio', 'Oklahoma', 'Oregon'],
      },
      {
        letter: 'P',
        names: ['Pennsylvania'],
      },
      {
        letter: 'R',
        names: ['Rhode Island'],
      },
      {
        letter: 'S',
        names: ['South Carolina', 'South Dakota'],
      },
      {
        letter: 'T',
        names: ['Tennessee', 'Texas'],
      },
      {
        letter: 'U',
        names: ['Utah'],
      },
      {
        letter: 'V',
        names: ['Vermont', 'Virginia'],
      },
      {
        letter: 'W',
        names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      },
    ];
  
    stateGroupOptions!: Observable<StateGroup[]>;
  
  
    private _filterGroup(value: string): StateGroup[] {
      if (value) {
        return this.stateGroups
          .map(group => ({letter: group.letter, names: this._filter2(group.names, value)}))
          .filter(group => group.names.length > 0);
      }
  
      return this.stateGroups;
    }


  //   //Filter autocomplete

    myControl2 = new FormControl('');
    options2: string[] = ['One', 'Two', 'Three'];
    filteredOptions2!: Observable<string[]>;
  
    private _filter3(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options2.filter(option => option.toLowerCase().includes(filterValue));
    }


    //Display value autocomplete (picked values)

    myControl3 = new FormControl<string | User>('');
    options3: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
    filteredOptions3!: Observable<User[]>;
  
  
    displayFn(user: User): string {
      return user && user.name ? user.name : '';
    }
  
    private _filter4(name: string): User[] {
      const filterValue = name.toLowerCase();
  
      return this.options3.filter(option => option.name.toLowerCase().includes(filterValue));
    }
}
