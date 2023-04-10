
export const gridListData: any ={

    BasicGridList:
    `<mat-grid-list cols="2" rowHeight="2:1">
    <mat-grid-tile>1</mat-grid-tile>
    <mat-grid-tile>2</mat-grid-tile>
    <mat-grid-tile>3</mat-grid-tile>
    <mat-grid-tile>4</mat-grid-tile>
    </mat-grid-list>`,

    DynamicGridListHTML:
    `<mat-grid-list cols="4" rowHeight="100px">
    <mat-grid-tile
        *ngFor="let tile of tiles"
        [colspan]="tile.cols"
        [rowspan]="tile.rows"
        [style.background]="tile.color">
      {{tile.text}}
    </mat-grid-tile>
    </mat-grid-list>`,
    DynamicGridListTS:
    `export interface Tile {
        color: string;
        cols: number;
        rows: number;
        text: string;
      }
      
      tiles: Tile[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];`,
}