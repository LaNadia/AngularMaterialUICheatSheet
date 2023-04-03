import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  //chipBasic
  chipsBasic: string = 
  `<mat-label>This is mat-label (optional).these are options:</mat-label>
  <mat-chip-listbox>
      <mat-chip-option color="warn" selected>this you can select</mat-chip-option>
      <mat-chip>this you cannot</mat-chip>
      <mat-chip disabled>this is disabled</mat-chip>
  </mat-chip-listbox>`;


  //StackedColors
  stackedColors: any[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];

  stackedColorsTemplate: string = 
 ` <mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Color selection">
      <mat-chip-option *ngFor="let chip of stackedColors" selected [color]="chip.color">
            {{chip.name}}
      </mat-chip-option>
  </mat-chip-listbox>`;

  //Drag drop Chips
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

  dragDropTemplate: string = 
  `html:
  <mat-chip-set
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
</mat-chip-set>

ts:
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
`;

//chips with input!!!!!!!!!

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
  
chipsWithInput: any = 
`
html:
<mat-form-field class="example-chip-list" appearance="fill">
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
</mat-form-field>


ts: 
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
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
`;

//chips with avatar!!!!

chipsWithAvatar: string =
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
</mat-chip-listbox>`;


}
