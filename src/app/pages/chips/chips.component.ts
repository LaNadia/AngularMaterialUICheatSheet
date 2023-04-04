import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { chipsData } from './chipsData';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  //chipsBasic
  chipsBasic: string = chipsData.chipsBasic;


  //StackedColors
  stackedColorsTemplate: string = chipsData.stackedColorsTemplate;
  stackedColors: any[] = [
      {name: 'none', color: undefined},
      {name: 'Primary', color: 'primary'},
      {name: 'Accent', color: 'accent'},
      {name: 'Warn', color: 'warn'},
  ];
  


  //Drag drop Chips
  dragDropTemplateHTML: string = chipsData.dragDropTemplateHTML;
  dragDropTemplateTS: string = chipsData.dragDropTemplateTS;

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
  };




  //chips with input!!!!!!!!!
  chipsWithInputHTML:  string = chipsData.chipsWithInputHTML;
  chipsWithInputTS:  string = chipsData.chipsWithInputTS;

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
  



//chips with avatar!!!!
chipsWithAvatar: string = chipsData.chipsWithAvatar;



//chips with autocomplete
chipsWithhAutocompleteHTML: string = chipsData.chipsWithhAutocompleteHTML;
chipsWithhAutocompleteTS: string = chipsData.chipsWithhAutocompleteTS;


//chips with form control + buttons
chipsWithhFormControlAndButtonsHTML: string = chipsData.chipsWithhFormControlAndButtonsHTML;
chipsWithhFormControlAndButtonsTS: string = chipsData.chipsWithhFormControlAndButtonsTS;
}
