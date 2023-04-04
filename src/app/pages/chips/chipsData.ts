

export const chipsData: any = {

    chipsBasic:
    `<mat-label>This is mat-label (optional).these are options:</mat-label>
     <mat-chip-listbox>
        <mat-chip-option color="warn" selected>this you can select</mat-chip-option>
        <mat-chip>this you cannot</mat-chip>
        <mat-chip disabled>this is disabled</mat-chip>
     </mat-chip-listbox>`,


    stackedColorsTemplate:
    `<mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Color selection">
         <mat-chip-option *ngFor="let chip of stackedColors" selected [color]="chip.color">
               {{chip.name}}
         </mat-chip-option>
    </mat-chip-listbox>`,


    dragDropTemplateHTML:
    `<mat-chip-set
    class="example-chip"
    cdkDropList 
    cdkDropListOrientation="horizontal"
    (cdkDropListDropped)="drop($event)">
    <mat-chip
        class="example-box"
        cdkDrag
        *ngFor="let vegetable of vegetables">
        {{vegetable.name}}
    </mat-chip>
    </mat-chip-set>`,
    dragDropTemplateTS: 
    `import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

    vegetables: any[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
    ];

    drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    };`,


    chipsWithInputHTML: 
    `<mat-form-field class="example-chip-list" appearance="fill">
    <mat-label>Favorite Fruits</mat-label>
    <mat-chip-grid #chipGrid aria-label="Enter fruits">
    <mat-chip-row *ngFor="let fruit of fruits"
                    (removed)="remove(fruit)"
                    [editable]="true"
                    (edited)="edit(fruit, $event)"
                    [aria-description]="'press enter to edit ' + fruit.name">
        {{fruit.name}}
        <button matChipRemove [attr.aria-label]="'remove ' + fruit.name">
        <mat-icon>cancel</mat-icon>
        </button>
    </mat-chip-row>
    <input placeholder="New fruit..."
            [matChipInputFor]="chipGrid"
            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
            [matChipInputAddOnBlur]="addOnBlur"
            (matChipInputTokenEnd)="add($event)"/>
    </mat-chip-grid>
    </mat-form-field>`,
    chipsWithInputTS: 
    `import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
    import {COMMA, ENTER} from '@angular/cdk/keycodes';

    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    fruits: any[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

    add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
        this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
    }

    remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
        this.fruits.splice(index, 1);
    }
    }

    edit(fruit: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
        this.remove(fruit);
        return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
        this.fruits[index].name = value;
    }
    }
    `,


    chipsWithAvatar:
    `<mat-chip-listbox aria-label="Dog selection">
    <mat-chip>
    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>
    Dog one
    </mat-chip>
    <mat-chip color="primary">
    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>
    Dog two
    </mat-chip>
    <mat-chip color="accent">
    <img matChipAvatar src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt="Photo of a Shiba Inu"/>
    Dog three
    </mat-chip>
    </mat-chip-listbox>`,


    chipsWithhAutocompleteHTML:
        `<form>
        <mat-form-field class="example-chip-list" appearance="fill">
        <mat-label>Favorite Fruits</mat-label>
        <mat-chip-grid #chipGrid aria-label="Fruit selection">
            <mat-chip-row *ngFor="let fruit of fruits" (removed)="remove(fruit)">
            {{fruit}}
            <button matChipRemove [attr.aria-label]="'remove ' + fruit">
                <mat-icon>cancel</mat-icon>
            </button>
            </mat-chip-row>
        </mat-chip-grid>
        <input placeholder="New Fruit..." #fruitInput [formControl]="berryCtrl"
            [matChipInputFor]="chipGrid" [matAutocomplete]="auto"
            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
            (matChipInputTokenEnd)="add($event)"/>
        <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
            <mat-option *ngFor="let fruit of filteredBerries | async" [value]="fruit">
            {{fruit}}
            </mat-option>
        </mat-autocomplete>
        </mat-form-field>
    </form>`,
    chipsWithhAutocompleteTS:
    `separatorKeysCodes: number[] = [ENTER, COMMA];
    berryCtrl = new FormControl('');
    filteredBerries: Observable<string[]>;
    berries: string[] = ['Strawberry'];
    allBerries: string[] = ['Raspberry', 'Blueberry', 'Blackberry', 'Cranberry', 'Goji berries'];
    
    @ViewChild('fruitInput') berriesInput!: ElementRef<HTMLInputElement>;
    
    constructor() {
      this.filteredBerries = this.berryCtrl.valueChanges.pipe(
        startWith(null),
        map((berry: string | null) => (berry ? this._filter(berry) : this.allBerries.slice())),
      );
    }
    
    addBerry(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
    
      // Add our fruit
      if (value) {
        this.fruits.push(value);
      }
    
      // Clear the input value
      event.chipInput!.clear();
    
      this.berryCtrl.setValue(null);
    }
    
    removeBerry(fruit: string): void {
      const index = this.fruits.indexOf(fruit);
    
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
    
    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.berriesInput.nativeElement.value = '';
      this.berryCtrl.setValue(null);
    }
    
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
    
      return this.allBerries.filter(berry => berry.toLowerCase().includes(filterValue));
    }`,

    chipsWithhFormControlAndButtonsHTML:
    `<div class="example-button-container">
          <button mat-raised-button (click)="formControl.disable()">Disable form control</button>
          <button mat-raised-button (click)="formControl.enable()">Enable form control</button>
        </div>
        <p>
          <i>Enter video keywords</i>
        </p>
        <mat-form-field appearance="fill" class="example-form-field">
          <mat-label>Video keywords</mat-label>
          <mat-chip-grid #chipGrid aria-label="Enter keywords" [formControl]="formControl" >
            <mat-chip-row *ngFor="let keyword of keywords" (removed)="removeKeyword(keyword)">
              {{keyword}}
              <button matChipRemove aria-label="'remove ' + keyword">
                <mat-icon>cancel</mat-icon>
              </button>
            </mat-chip-row>
          </mat-chip-grid>
          <input placeholder="New keyword..."
                  [matChipInputFor]="chipGrid"
                  (matChipInputTokenEnd)="addKeyword($event)"/>
        </mat-form-field>
        
        <p>
          <b>The following keywords are entered:</b> {{formControl.value}}
        </p>
 `,
    chipsWithhFormControlAndButtonsTS:
    ` keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
    formControl = new FormControl(['angular']);
    
    removeKeyword(keyword: string) {
      const index = this.keywords.indexOf(keyword);
      if (index >= 0) {
        this.keywords.splice(index, 1);
      }
    }
    
    addKeyword(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
    
      // Add our keyword
      if (value) {
        this.keywords.push(value);
      }
    
      // Clear the input value
      event.chipInput!.clear();
    }`,


    


}
