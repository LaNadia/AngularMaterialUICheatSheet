export const listData: any  ={

    BasicListHTML:
    `<mat-list role="list">
    <mat-list-item role="listitem">Item 1</mat-list-item>
    <mat-list-item role="listitem">Item 2</mat-list-item>
    <mat-list-item role="listitem">Item 3</mat-list-item>
     </mat-list>`,

    ListWithSectionsHTML:
    `<mat-list>
    <div mat-subheader>Folders</div>
    <mat-list-item *ngFor="let folder of folders">
      <mat-icon matListItemIcon>folder</mat-icon>
      <div matListItemTitle>{{folder.name}}</div>
      <div matListItemLine>{{folder.updated | date}}</div>
    </mat-list-item>
    <mat-divider></mat-divider>
    <div mat-subheader>Notes</div>
    <mat-list-item *ngFor="let note of notes">
      <mat-icon matListItemIcon>note</mat-icon>
      <div matListItemTitle>{{note.name}}</div>
      <div matListItemLine>{{note.updated | date}}</div>
    </mat-list-item>
     </mat-list>`,
    ListWithSectionsTS:
    `export interface Section {
        name: string;
        updated: Date;
      }
      folders: Section[] = [
        {
          name: 'Photos',
          updated: new Date('1/1/16'),
        },
        {
          name: 'Recipes',
          updated: new Date('1/17/16'),
        },
        {
          name: 'Work',
          updated: new Date('1/28/16'),
        },
      ];
      notes: Section[] = [
        {
          name: 'Vacation Itinerary',
          updated: new Date('2/20/16'),
        },
        {
          name: 'Kitchen Remodel',
          updated: new Date('1/18/16'),
        },
      ];`,

    ListWithSelectionHTML:
    `<mat-selection-list #shoes>
    <mat-list-option *ngFor="let shoe of typesOfShoes">
      {{shoe}}
    </mat-list-option>
  </mat-selection-list>
  
  <p>
    Options selected: {{shoes.selectedOptions.selected.length}}
     </p>`,
    ListWithSelectionTS:
    `typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];`,

    ListWithSingleSelectionHTML:
    `<mat-selection-list #shoes [multiple]="false">
    <mat-list-option *ngFor="let shoe of typesOfShoes" [value]="shoe">
      {{shoe}}
    </mat-list-option>
  </mat-selection-list>
  
  <p>
    Option selected: {{shoes.selectedOptions.hasValue() ? shoes.selectedOptions.selected[0].value : 'None'}}
     </p>`,
    ListWithSingleSelectionTS:
    ` typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];`,

    ListVariantsHTML:
    `<h3>Single line lists</h3>
    <mat-list>
      <mat-list-item>
        <span matListItemTitle>This is the title</span>
      </mat-list-item>
      <mat-list-item>Also the title</mat-list-item>
    </mat-list>
    
    <h3>Two line lists</h3>
    <mat-list>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span>Second line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        Second line
      </mat-list-item>
    </mat-list>
    
    <h3>Three line lists</h3>
    <mat-list>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line</span>
        <span matListItemLine>Third line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line. This line will truncate.</span>
        <span>Third line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line. This line will truncate.</span>
        Third line
      </mat-list-item>
    </mat-list>
    
    <h3>Three line list with secondary text wrapping</h3>
    <mat-list class="example-list-wrapping">
      <mat-list-item lines="3">
        <span matListItemTitle>Title</span>
        <span
          >Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text
          inside of a 'matListItemTitle' or 'matListItemLine' will never wrap.
        </span>
      </mat-list-item>
      <mat-list-item lines="3">
        <span matListItemTitle>Title</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est
      </mat-list-item>
    </mat-list>`,

  
  }