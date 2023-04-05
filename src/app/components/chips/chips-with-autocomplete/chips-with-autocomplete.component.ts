import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, map, startWith } from 'rxjs';
import { chipsData } from '../chipsData';



@Component({
  selector: 'app-chips-with-autocomplete',
  templateUrl: './chips-with-autocomplete.component.html',
  styleUrls: ['./chips-with-autocomplete.component.scss']
})
export class ChipsWithAutocompleteComponent {
    
  chipsWithhAutocompleteHTML: string = chipsData.chipsWithhAutocompleteHTML;
  chipsWithhAutocompleteTS: string = chipsData.chipsWithhAutocompleteTS;
  separatorKeysCodes: number[] = [ENTER, COMMA]; 
  berryCtrl = new FormControl('');
  filteredBerries: Observable<string[]>;
  berries: string[] = ['Strawberry'];
  allBerries: string[] = ['Raspberry', 'Blueberry', 'Blackberry', 'Cranberry', 'Goji berries'];

  @ViewChild('berriesInput') berriesInput!: ElementRef<HTMLInputElement>;

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
      this.berries.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.berryCtrl.setValue(null);
  }

  removeBerry(fruit: string): void {
    const index = this.berries.indexOf(fruit);

    if (index >= 0) {
      this.berries.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.berries.push(event.option.viewValue);
    this.berriesInput.nativeElement.value = '';
    this.berryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allBerries.filter(berry => berry.toLowerCase().includes(filterValue));
  }

}
