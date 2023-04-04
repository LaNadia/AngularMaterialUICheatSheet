import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips-with-form-control-and-buttons',
  templateUrl: './chips-with-form-control-and-buttons.component.html',
  styleUrls: ['./chips-with-form-control-and-buttons.component.scss']
})
export class ChipsWithFormControlAndButtonsComponent {

  keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
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
  }
}
