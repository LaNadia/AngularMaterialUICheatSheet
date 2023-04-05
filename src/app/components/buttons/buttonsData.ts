export const buttonsData: any  ={

    buttons:
    `<button mat-button>mat-button</button>
    <button mat-raised-button>raised-button</button>
    <button mat-flat-button>flat-button</button>
    <button mat-stroked-button>Basic</button>
    <button mat-stroked-button color="primary">Primary</button>`,

    buttonsWithColors:
    `<button color='primary' mat-button>primary</button>
    <button color='accent' mat-button>accent</button>
    <button color='warn' disableRipple mat-button>warn</button>
    <button color='primary' mat-raised-button>raised-button</button>`,


    otherButtons: 
    `<button mat-fab>fab</button>
    <button mat-mini-fab>mini-fab</button>`,


    icons: 
    `<button mat-icon-button><mat-icon>open_in_new</mat-icon></button>
    <button mat-icon-button><mat-icon>delete</mat-icon></button>
    <button mat-icon-button><mat-icon>search</mat-icon></button>
    <button mat-icon-button><mat-icon>done_all</mat-icon></button>
    <button mat-icon-button><mat-icon>sentiment_very_satisfied</mat-icon></button>`,


    singleToggle: 
    `<h4>Single selection</h4>
    <mat-button-toggle-group name="favoriteColor" aria-label="Favorite Color">
    <mat-button-toggle value="red">Red</mat-button-toggle>
    <mat-button-toggle value="green">Green</mat-button-toggle>
    <mat-button-toggle value="blue">Blue</mat-button-toggle>
    </mat-button-toggle-group>`,
    mutlipleToggle: 
    `<h4>Multiple selection</h4>
    <mat-button-toggle-group name="ingredients" aria-label="Ingredients" multiple>
    <mat-button-toggle value="flour">Flour</mat-button-toggle>
    <mat-button-toggle value="eggs">Eggs</mat-button-toggle>
    <mat-button-toggle value="sugar">Sugar</mat-button-toggle>
    </mat-button-toggle-group>`,


    buttonToggleTemplatedrivenform:
    `<section>
    <h4>Button Toggle inside of a Template-driven form</h4>
    <mat-button-toggle-group [(ngModel)]="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
      </mat-button-toggle-group>
     <p>Chosen value is {{fontStyle}}</p>
     </section>
    `,
    buttonToggleReactiveform:
    `<section>
    <h4>Button Toggle inside of a Reactive form</h4>
    <mat-button-toggle-group [formControl]="fontStyleControl" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>
    <p>Chosen value is {{fontStyleControl.value}}</p>
    </section>`,
    buttonToggleReactiveformTS:
     `fontStyleControl = new FormControl('');
     fontStyle?: string;`,


    buttonTogglesNoForms: 
     `<mat-button-toggle-group #group="matButtonToggleGroup">
     <mat-button-toggle value="left" aria-label="Text align left">
       <mat-icon>format_align_left</mat-icon>
     </mat-button-toggle>
     <mat-button-toggle value="center" aria-label="Text align center">
       <mat-icon>format_align_center</mat-icon>
     </mat-button-toggle>
     <mat-button-toggle value="right" aria-label="Text align right">
       <mat-icon>format_align_right</mat-icon>
     </mat-button-toggle>
     <mat-button-toggle value="justify" disabled aria-label="Text align justify">
       <mat-icon>format_align_justify</mat-icon>
     </mat-button-toggle>
     </mat-button-toggle-group>
    <div class="example-selected-value">Selected value: {{group.value}}</div>`,


    buttonToggleAppearance:
    `<div>
    Default appearance:
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>
  </div>
  <div>
    Legacy appearance:
    <mat-button-toggle-group appearance="legacy" name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>
  </div>`,





}