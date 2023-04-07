import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { checkboxData } from './checkboxData';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {


  basicCheckboxesHTML: string = checkboxData.basicCheckboxesHTML;
  basicCheckboxesTS: string = checkboxData.basicCheckboxesTS;
  ConfigurableCheckboxHTML: string = checkboxData.ConfigurableCheckboxHTML;
  ConfigurableCheckboxTS: string = checkboxData.ConfigurableCheckboxTS;
  CheckboxerReactiveFormsHTML: string = checkboxData.CheckboxerReactiveFormsHTML; 
  CheckboxerReactiveFormsTS: string = checkboxData.CheckboxerReactiveFormsTS; 


  task: any = {
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
  }

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) {}
}
