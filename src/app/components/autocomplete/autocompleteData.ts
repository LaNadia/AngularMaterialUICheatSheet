export const autocompleteData: any  ={

  SimpleAutocompleteHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Number</mat-label>
      <input type="text"
             placeholder="Pick one"
             aria-label="Number"
             matInput
             [formControl]="myControl"
             [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let option of options" [value]="option">
          {{option}}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
    </form>`,

  SimpleAutocompleteTS:
  `myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];`,

  PlainInputAutocompleteHTML:
  `<form class="example-form">
  <input type="text"
         placeholder="Search for a street"
         [formControl]="control"
         [matAutocomplete]="auto"
         class="example-input">
  <mat-autocomplete #auto="matAutocomplete">
    <mat-option *ngFor="let street of filteredStreets | async" [value]="street">
      {{street}}
    </mat-option>
  </mat-autocomplete>
  </form>`,

  PlainInputAutocompleteTS:
    `control = new FormControl('');
    streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
    filteredStreets!: Observable<string[]>;

    ngOnInit() {
    this.filteredStreets = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
    );
    }

    private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
    }

    private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
    }`,

  AutocompleteOverviewHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>State</mat-label>
      <input matInput
             aria-label="State"
             [matAutocomplete]="auto"
             [formControl]="stateCtrl">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
          <img alt="" class="example-option-img" [src]="state.flag" height="25">
          <span>{{state.name}}</span> |
          <small>Population: {{state.population}}</small>
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  
    <br>
  
    <mat-slide-toggle
      [checked]="stateCtrl.disabled"
      (change)="stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()">
      Disable Input?
    </mat-slide-toggle>
     </form>`,
  AutocompleteOverviewTS:
  ` stateCtrl = new FormControl('');
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

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
   }`,

  OptionGroupsAutocompleteHTML:
  `<form [formGroup]="stateForm">
  <mat-form-field appearance="fill">
    <mat-label>States Group</mat-label>
    <input type="text"
           matInput
           formControlName="stateGroup"
           required
           [matAutocomplete]="autoGroup">
      <mat-autocomplete #autoGroup="matAutocomplete">
        <mat-optgroup *ngFor="let group of stateGroupOptions | async" [label]="group.letter">
          <mat-option *ngFor="let name of group.names" [value]="name">
            {{name}}
          </mat-option>
      </mat-optgroup>
    </mat-autocomplete>
  </mat-form-field>
    </form>`,
    OptionGroupsAutocompleteTS:
    `import {Component, OnInit} from '@angular/core';
    import {FormBuilder} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {startWith, map} from 'rxjs/operators';

    export interface StateGroup {
    letter: string;
    names: string[];
    }

    export const _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();

    return opt.filter(item => item.toLowerCase().includes(filterValue));
    };

    /**
     * @title Option groups autocomplete
     */
    @Component({
    selector: 'autocomplete-optgroup-example',
    templateUrl: 'autocomplete-optgroup-example.html',
    })
    export class AutocompleteOptgroupExample implements OnInit {
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

    stateGroupOptions: Observable<StateGroup[]>;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
        startWith(''),
        map(value => this._filterGroup(value || '')),
        );
    }

    private _filterGroup(value: string): StateGroup[] {
        if (value) {
        return this.stateGroups
            .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
            .filter(group => group.names.length > 0);
        }

        return this.stateGroups;
    }
    }`,

  FilterAutocompleteHTML:
    `<form class="example-form">
    <mat-form-field class="example-full-width" appearance="fill">
      <mat-label>Number</mat-label>
      <input type="text"
             placeholder="Pick one"
             aria-label="Number"
             matInput
             [formControl]="myControl"
             [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
          {{option}}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
    </form>`,

  FilterAutocompleteTS:
  `myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }`,

  DisplayValueAutocompleteHTML:
  `<form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Assignee</mat-label>
    <input type="text" matInput [formControl]="myControl" [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{option.name}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
  </form>`,
  DisplayValueAutocompleteTS:
  ` myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }`,



}