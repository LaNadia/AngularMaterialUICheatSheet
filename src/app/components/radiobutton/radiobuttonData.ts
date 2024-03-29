
export const radiobuttonData: any  ={

    BasicRadios:
    `<mat-radio-group aria-label="Select an option">
    <mat-radio-button value="1">Option 1</mat-radio-button>
    <mat-radio-button value="2">Option 2</mat-radio-button>
     </mat-radio-group>`,

    RadiosWithNgModelHTML:
    `<label id="example-radio-group-label">Pick your favorite season</label>
    <mat-radio-group
      aria-labelledby="example-radio-group-label"
      class="example-radio-group"
      [(ngModel)]="favoriteSeason">
      <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
        {{season}}
      </mat-radio-button>
    </mat-radio-group>
    <div>Your favorite season is: {{favoriteSeason}}</div>`,
    RadiosWithNgModelTS:
    `favoriteSeason: string;
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];`,




}