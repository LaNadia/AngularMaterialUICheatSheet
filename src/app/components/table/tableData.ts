
export const tableData: any  ={

    BasicUseHTML:
    `<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <!--- Note that these columns can be defined in any order.
          The actual rendered columns are set as a property on the row definition" -->
  
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef> Weight </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef> Symbol </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
     </table>`,
    BasicUseTS:
    `export interface PeriodicElement {
        name: string;
        position: number;
        weight: number;
        symbol: string;
      }
      
    const ELEMENT_DATA: PeriodicElement[] = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
     dataSource = ELEMENT_DATA;`,

    TableDynamicallyChangingTheColumnsDisplayedHTML:
    `<button mat-raised-button (click)="addColumn()"> Add column </button>
    <button mat-raised-button (click)="removeColumn()"> Remove column </button>
    <button mat-raised-button (click)="shuffle()"> Shuffle </button>
    
    <table mat-table [dataSource]="data" class="mat-elevation-z8">
      <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
        <th mat-header-cell *matHeaderCellDef> {{column}} </th>
        <td mat-cell *matCellDef="let element"> {{element[column]}} </td>
      </ng-container>
    
      <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
      <tr mat-row *matRowDef="let row; columns: columnsToDisplay;"></tr>
    </table>`,
    TableDynamicallyChangingTheColumnsDisplayedTS:
    `export interface PeriodicElement {
        name: string;
        position: number;
        weight: number;
        symbol: string;
      }
      
      const ELEMENT_DATA: PeriodicElement[] = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];
      
      displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
      columnsToDisplay: string[] = this.displayedColumns.slice();
      data: PeriodicElement[] = ELEMENT_DATA;
    
      addColumn() {
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
      }
    
      removeColumn() {
        if (this.columnsToDisplay.length) {
          this.columnsToDisplay.pop();
        }
      }
    
      shuffle() {
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
    
          // Swap
          let temp = this.columnsToDisplay[currentIndex];
          this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
          this.columnsToDisplay[randomIndex] = temp;
        }
    }`,

    TableWithFilteringHTML:
    `<mat-form-field>
    <mat-label>Filter</mat-label>
    <input matInput (keyup)="applyFilter($event)" placeholder="Ex. ium" #input>
  </mat-form-field>
  
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef> Weight </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef> Symbol </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  
    <!-- Row shown when there is no matching data. -->
    <tr class="mat-row" *matNoDataRow>
      <td class="mat-cell" colspan="4">No data matching the filter "{{input.value}}"</td>
    </tr>
    </table>`,
    TableWithFilteringTS:
    `import {Component} from '@angular/core';
    import {MatTableDataSource} from '@angular/material/table';

    export interface PeriodicElement {
        name: string;
        position: number;
        weight: number;
        symbol: string;
      }
      
      const ELEMENT_DATA: PeriodicElement[] = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];
      
      
      export class TableFilteringExample {
        displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
        dataSource = new MatTableDataSource(ELEMENT_DATA);
      
        applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
    }`,

    FlexTableWhereOneColumnsCellsHasGreaterHheightThanOthersHTML:
    `<mat-table [dataSource]="dataSource" class="mat-elevation-z8">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
  
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>`,
    FlexTableWhereOneColumnsCellsHasGreaterHheightThanOthersTS:
    `export interface PeriodicElement {
        name: string;
        position: number;
        weight: number;
        symbol: string;
      }
      
      const ELEMENT_DATA: PeriodicElement[] = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];
      
      displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
      dataSource = ELEMENT_DATA;`,

    FooterRowTableHTML:
    `<table mat-table [dataSource]="transactions" class="mat-elevation-z8">
    <!-- Item Column -->
    <ng-container matColumnDef="item">
      <th mat-header-cell *matHeaderCellDef> Item </th>
      <td mat-cell *matCellDef="let transaction"> {{transaction.item}} </td>
      <td mat-footer-cell *matFooterCellDef> Total </td>
    </ng-container>
  
    <!-- Cost Column -->
    <ng-container matColumnDef="cost">
      <th mat-header-cell *matHeaderCellDef> Cost </th>
      <td mat-cell *matCellDef="let transaction"> {{transaction.cost | currency}} </td>
      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    <tr mat-footer-row *matFooterRowDef="displayedColumns"></tr>
    </table>`,
    FooterRowTableTS:
    `interface Transaction {
        item: string;
        cost: number;
      }
      
      displayedColumns: string[] = ['item', 'cost'];
      transactions: Transaction[] = [
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
      ];
    
      /** Gets the total cost of all transactions. */
      getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }`,

    TableWithMultipleHeaderAndFooterRowsHTML:
    `<table mat-table [dataSource]="transactions" class="mat-elevation-z8">
    <!-- Item Column -->
    <ng-container matColumnDef="item">
      <th mat-header-cell *matHeaderCellDef> Item </th>
      <td mat-cell *matCellDef="let transaction"> {{transaction.item}} </td>
      <td mat-footer-cell *matFooterCellDef> Total </td>
    </ng-container>
  
    <!-- Cost Column -->
    <ng-container matColumnDef="cost">
      <th mat-header-cell *matHeaderCellDef> Cost </th>
      <td mat-cell *matCellDef="let transaction"> {{transaction.cost | currency}} </td>
      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>
    </ng-container>
  
    <!-- Item Description Column -->
    <ng-container matColumnDef="item-description">
      <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>
    </ng-container>
  
    <!-- Cost Description Column -->
    <ng-container matColumnDef="cost-description">
      <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>
    </ng-container>
  
    <!-- Disclaimer column -->
    <ng-container matColumnDef="disclaimer">
      <td mat-footer-cell *matFooterCellDef colspan="2">
        Please note that the cost of items displayed are completely and totally made up.
      </td>
    </ng-container>
  
    <!-- The table will render two header rows, one data row per data object, and two footer rows. -->
    <tr mat-header-row *matHeaderRowDef="displayedColumns"
        class="example-first-header-row">
    </tr>
    <tr mat-header-row *matHeaderRowDef="['item-description', 'cost-description']"
        class="example-second-header-row">
    </tr>
  
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  
    <tr mat-footer-row *matFooterRowDef="displayedColumns" class="example-first-footer-row"></tr>
    <tr mat-footer-row *matFooterRowDef="['disclaimer']" class="example-second-footer-row"></tr>
    </table>`,
    TableWithMultipleHeaderAndFooterRowsTS:
    `interface Transaction {
        item: string;
        cost: number;
      }
      
      displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }`,

    BindingEventHandlersAndPropertiesToTheTableRowsHTML:
    `<table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef>No.</th>
      <td mat-cell *matCellDef="let element">{{element.position}}</td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef>Name</th>
      <td mat-cell *matCellDef="let element">{{element.name}}</td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef>Weight</th>
      <td mat-cell *matCellDef="let element">{{element.weight}}</td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef>Symbol</th>
      <td mat-cell *matCellDef="let element">{{element.symbol}}</td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr
        mat-row
        (click)="clickedRows.add(row)"
        [class.demo-row-is-clicked]="clickedRows.has(row)"
        *matRowDef="let row; columns: displayedColumns;"
    ></tr>
  </table>
  
  <div>
    <h3>
      Click Log
    </h3>
  </div>
  
  <div *ngIf="!clickedRows.size">
    Clicked rows will be logged here
  </div>
  
  <ul>
    <li *ngFor="let clickedRow of clickedRows">
      Clicked on {{clickedRow.name}}
    </li>
    </ul>`,
    BindingEventHandlersAndPropertiesToTheTableRowsTS:
    `export interface PeriodicElement {
        name: string;
        position: number;
        weight: number;
        symbol: string;
      }
      
      const ELEMENT_DATA: PeriodicElement[] = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];
      
      displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
      dataSource = ELEMENT_DATA;
    clickedRows = new Set<PeriodicElement>();`,

    TableWithStickyColumnsHTML:
    `<section class="example-container mat-elevation-z8" tabindex="0">
    <table mat-table [dataSource]="dataSource">
  
      <!-- Name Column -->
      <ng-container matColumnDef="name" sticky>
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>
  
      <!-- Position Column -->
      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
      </ng-container>
  
      <!-- Weight Column -->
      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef> Weight </th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
      </ng-container>
  
      <!-- Symbol Column -->
      <ng-container matColumnDef="symbol">
        <th mat-header-cell *matHeaderCellDef> Symbol </th>
        <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
      </ng-container>
  
      <!-- Star Column -->
      <ng-container matColumnDef="star" stickyEnd>
        <th mat-header-cell *matHeaderCellDef aria-label="row actions">&nbsp;</th>
        <td mat-cell *matCellDef="let element">
          <mat-icon>more_vert</mat-icon>
        </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    </section>`,
    TableWithStickyColumnsTS:
    `displayedColumns = [
      'name',
      'position',
      'weight',
      'symbol',
      'position',
      'weight',
      'symbol',
      'star',
    ];
    dataSource = ELEMENT_DATA;
  }
  
  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];`,

    TableWithStickyFooterHTML:
    `<section class="example-container mat-elevation-z8" tabindex="0">
    <table mat-table [dataSource]="transactions">
      <!-- Item Column -->
      <ng-container matColumnDef="item">
        <th mat-header-cell *matHeaderCellDef> Item </th>
        <td mat-cell *matCellDef="let transaction"> {{transaction.item}} </td>
        <td mat-footer-cell *matFooterCellDef> Total </td>
      </ng-container>
  
      <!-- Cost Column -->
      <ng-container matColumnDef="cost">
        <th mat-header-cell *matHeaderCellDef> Cost </th>
        <td mat-cell *matCellDef="let transaction"> {{transaction.cost | currency}} </td>
        <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      <tr mat-footer-row *matFooterRowDef="displayedColumns; sticky: true"></tr>
    </table>
  </section>`,
    TableWithStickyFooterTS:
    `
    export interface Transaction {
      item: string;
      cost: number;
    }
    displayedColumns = ['item', 'cost'];
    transactions: Transaction[] = [
      {item: 'Beach ball', cost: 4},
      {item: 'Towel', cost: 5},
      {item: 'Frisbee', cost: 2},
      {item: 'Sunscreen', cost: 4},
      {item: 'Cooler', cost: 25},
      {item: 'Swim suit', cost: 15},
    ];
  
    /** Gets the total cost of all transactions. */
    getTotalCost() {
      return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }`,

    TableWithStickyHeaderHTML:
    `<section class="example-container mat-elevation-z8" tabindex="0">
    <table mat-table [dataSource]="dataSource">
  
      <!-- Position Column -->
      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
      </ng-container>
  
      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>
  
      <!-- Weight Column -->
      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef> Weight </th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
      </ng-container>
  
      <!-- Symbol Column -->
      <ng-container matColumnDef="symbol">
        <th mat-header-cell *matHeaderCellDef> Symbol </th>
        <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </section>`,
    TableWithStickyHeaderTS:
    `displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;

  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];`,


   matTextColumnWithVariousConfigurationsInterfaceHTML:
   `<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
   <mat-text-column name="position" [headerText]="headerText"></mat-text-column>
 
   <!-- Change the header text. -->
   <mat-text-column name="name" headerText="Element"></mat-text-column>
 
   <!-- Provide a data accessor for getting the cell text values. -->
   <mat-text-column name="weight" [dataAccessor]="getWeight"></mat-text-column>
 
   <!-- Justify the content of the cells to the cell end. -->
   <mat-text-column name="symbol" justify="end"></mat-text-column>
 
   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
   <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>`,
   matTextColumnWithVariousConfigurationsInterfaceTS:
   ` import {Component} from '@angular/core';
   import {DecimalPipe} from '@angular/common';
   import {MatTableDataSource} from '@angular/material/table';

   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   dataSource = new MatTableDataSource(ELEMENT_DATA);
 
   headerText: string;
 
   decimalPipe = new DecimalPipe('en-US');
 
   /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
   getWeight = (data: PeriodicElement): string => {
     const result = this.decimalPipe.transform(data.weight, '1.0-2');
     return result === null ? '' : result;
   };`,
   

   matTextColumnDisplayTextValueHTML:
   `<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
   <mat-text-column name="position"></mat-text-column>
   <mat-text-column name="name"></mat-text-column>
   <mat-text-column name="weight"></mat-text-column>
   <mat-text-column name="symbol"></mat-text-column>
 
   <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
   <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>`,
   matTextColumnDisplayTextValueTS:
   `export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;`,

    AddingAndRemovingDataWhenUsingArraybasedDatasourceHTML:
    `<div class="demo-button-container">
    <button mat-raised-button (click)="addData()" class="demo-button">
      Add data
    </button>
    <button
        mat-raised-button
        [disabled]="!dataSource.length"
        (click)="removeData()"
        class="demo-button">
      Remove data
    </button>
  </div>
  
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef>No.</th>
      <td mat-cell *matCellDef="let element">{{element.position}}</td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef>Name</th>
      <td mat-cell *matCellDef="let element">{{element.name}}</td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef>Weight</th>
      <td mat-cell *matCellDef="let element">{{element.weight}}</td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef>Symbol</th>
      <td mat-cell *matCellDef="let element">{{element.symbol}}</td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>`,
    AddingAndRemovingDataWhenUsingArraybasedDatasourceTS:
    `import {Component, ViewChild} from '@angular/core';
    import {MatTable} from '@angular/material/table';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
    }`,
    AddingAndRemovingDataWhenUsingArraybasedDatasourceCSS:
    `.demo-table {
      width: 100%;
    }
    
    .demo-button-container {
      padding-bottom: 16px;
    }
    
    .demo-button + .demo-button {
      margin-left: 8px;
    }`,

    AddingAndRemovingDataWhenUsinObservablebasedDatasourceHTML:
    `<div class="demo-button-container">
    <button mat-raised-button (click)="addData()" class="demo-button">
      Add data
    </button>
    <button
        mat-raised-button
        [disabled]="!dataToDisplay.length"
        (click)="removeData()"
        class="demo-button">
      Remove data
    </button>
  </div>
  
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef>No.</th>
      <td mat-cell *matCellDef="let element">{{element.position}}</td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef>Name</th>
      <td mat-cell *matCellDef="let element">{{element.name}}</td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef>Weight</th>
      <td mat-cell *matCellDef="let element">{{element.weight}}</td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef>Symbol</th>
      <td mat-cell *matCellDef="let element">{{element.symbol}}</td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>`,
    AddingAndRemovingDataWhenUsinObservablebasedDatasourceTS:
    `import {Component} from '@angular/core';
    import {DataSource} from '@angular/cdk/collections';
    import {Observable, ReplaySubject} from 'rxjs';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataToDisplay = [...ELEMENT_DATA];
  
    dataSource = new ExampleDataSource(this.dataToDisplay);
  
    addData() {
      const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
      this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
      this.dataSource.setData(this.dataToDisplay);
    }
  
    removeData() {
      this.dataToDisplay = this.dataToDisplay.slice(0, -1);
      this.dataSource.setData(this.dataToDisplay);
    }
  }
  
  class ExampleDataSource extends DataSource<PeriodicElement> {
    private _dataStream = new ReplaySubject<PeriodicElement[]>();
  
    constructor(initialData: PeriodicElement[]) {
      super();
      this.setData(initialData);
    }
  
    connect(): Observable<PeriodicElement[]> {
      return this._dataStream;
    }
  
    disconnect() {}
  
    setData(data: PeriodicElement[]) {
      this._dataStream.next(data);
    }`,
    AddingAndRemovingDataWhenUsinObservablebasedDatasourceCSS:
    `.demo-table {
      width: 100%;
    }
    
    .demo-button-container {
      padding-bottom: 16px;
    }
    
    .demo-button + .demo-button {
      margin-left: 8px;
    }`,

    tableWithExpandableRowsHTML:
    `<table mat-table
    [dataSource]="dataSource" multiTemplateDataRows
    class="mat-elevation-z8">
<ng-container matColumnDef="{{column}}" *ngFor="let column of columnsToDisplay">
 <th mat-header-cell *matHeaderCellDef> {{column}} </th>
 <td mat-cell *matCellDef="let element"> {{element[column]}} </td>
</ng-container>
<ng-container matColumnDef="expand">
 <th mat-header-cell *matHeaderCellDef aria-label="row actions">&nbsp;</th>
 <td mat-cell *matCellDef="let element">
   <button mat-icon-button aria-label="expand row" (click)="(expandedElement = expandedElement === element ? null : element); $event.stopPropagation()">
     <mat-icon *ngIf="expandedElement !== element">keyboard_arrow_down</mat-icon>
     <mat-icon *ngIf="expandedElement === element">keyboard_arrow_up</mat-icon>
   </button>
 </td>
</ng-container>

<!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
<ng-container matColumnDef="expandedDetail">
 <td mat-cell *matCellDef="let element" [attr.colspan]="columnsToDisplayWithExpand.length">
   <div class="example-element-detail"
        [@detailExpand]="element == expandedElement ? 'expanded' : 'collapsed'">
     <div class="example-element-diagram">
       <div class="example-element-position"> {{element.position}} </div>
       <div class="example-element-symbol"> {{element.symbol}} </div>
       <div class="example-element-name"> {{element.name}} </div>
       <div class="example-element-weight"> {{element.weight}} </div>
     </div>
     <div class="example-element-description">
       {{element.description}}
       <span class="example-element-description-attribution"> -- Wikipedia </span>
     </div>
   </div>
 </td>
</ng-container>

<tr mat-header-row *matHeaderRowDef="columnsToDisplayWithExpand"></tr>
<tr mat-row *matRowDef="let element; columns: columnsToDisplayWithExpand;"
   class="example-element-row"
   [class.example-expanded-row]="expandedElement === element"
   (click)="expandedElement = expandedElement === element ? null : element">
</tr>
<tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="example-detail-row"></tr>
    </table>`,
    tableWithExpandableRowsTS:
    `import {Component} from '@angular/core';
    import {animate, state, style, transition, trigger} from '@angular/animations';    
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
      description: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: 'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
            atomic weight of 1.008, hydrogen is the lightest element on the periodic table.',
      },
      {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: 'Helium is a chemical element with symbol He and atomic number 2. It is a
            colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
            group in the periodic table. Its boiling point is the lowest among all the elements.',
      },
      {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: 'Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
            silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
            lightest solid element.',
      },
      {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: 'Beryllium is a chemical element with symbol Be and atomic number 4. It is a
            relatively rare element in the universe, usually occurring as a product of the spallation of
            larger atomic nuclei that have collided with cosmic rays.',
      },
      {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: 'Boron is a chemical element with symbol B and atomic number 5. Produced entirely
            by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
            low-abundance element in the Solar system and in the Earth's crust.',
      },
      {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: 'Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
            and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
            to group 14 of the periodic table.',
      },
      {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: 'Nitrogen is a chemical element with symbol N and atomic number 7. It was first
            discovered and isolated by Scottish physician Daniel Rutherford in 1772.',
      },
      {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: 'Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
             the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
             agent that readily forms oxides with most elements as well as with other compounds.',
      },
      {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: 'Fluorine is a chemical element with symbol F and atomic number 9. It is the
            lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
            conditions.',
      },
      {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: 'Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
            Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
            two-thirds the density of air.',
      },
    ];
    
    import {animate, state, style, transition, trigger} from '@angular/animations';

    @Component({
      selector: 'table-expandable-rows-example',
      styleUrls: ['table-expandable-rows-example.css'],
      templateUrl: 'table-expandable-rows-example.html',
      animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
    })
    
    dataSource = ELEMENT_DATA;
    columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    expandedElement: PeriodicElement | null;`,
    tableWithExpandableRowsCSS:
    `table {
      width: 100%;
    }
    
    tr.example-detail-row {
      height: 0;
    }
    
    tr.example-element-row:not(.example-expanded-row):hover {
      background: whitesmoke;
    }
    
    tr.example-element-row:not(.example-expanded-row):active {
      background: #efefef;
    }
    
    .example-element-row td {
      border-bottom-width: 0;
    }
    
    .example-element-detail {
      overflow: hidden;
      display: flex;
    }
    
    .example-element-diagram {
      min-width: 80px;
      border: 2px solid black;
      padding: 8px;
      font-weight: lighter;
      margin: 8px 0;
      height: 104px;
    }
    
    .example-element-symbol {
      font-weight: bold;
      font-size: 40px;
      line-height: normal;
    }
    
    .example-element-description {
      padding: 16px;
    }
    
    .example-element-description-attribution {
      opacity: 0.5;
    }`,

    tableWithColumnsDefinedUsingngForHTML:
    `<table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
    <ng-container *ngFor="let column of columns" [matColumnDef]="column.columnDef">
      <th mat-header-cell *matHeaderCellDef>
        {{column.header}}
      </th>
      <td mat-cell *matCellDef="let row">
        {{column.cell(row)}}
      </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>`,
    tableWithColumnsDefinedUsingngForTS:
    `export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    columns = [
      {
        columnDef: 'position',
        header: 'No.',
        cell: (element: PeriodicElement) => "$ {element.position}",
      },
      {
        columnDef: 'name',
        header: 'Name',
        cell: (element: PeriodicElement) => "$ {element.name}",
      },
      {
        columnDef: 'weight',
        header: 'Weight',
        cell: (element: PeriodicElement) => "$ {element.weight}",
      },
      {
        columnDef: 'symbol',
        header: 'Symbol',
        cell: (element: PeriodicElement) => "$ {element.symbol}",
      },
    ];
    dataSource = ELEMENT_DATA;
    displayedColumns = this.columns.map(c => c.columnDef);`,
    tableWithColumnsDefinedUsingngForCSS:
    `.demo-table {
      width: 100%;
    }`,

    TableRetrievingDataThroughHTTPHTML:
    `<div class="example-container mat-elevation-z8">
    <div class="example-loading-shade"
         *ngIf="isLoadingResults || isRateLimitReached">
      <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
      <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
        GitHub's API rate limit has been reached. It will be reset in one minute.
      </div>
    </div>
  
    <div class="example-table-container">
  
      <table mat-table [dataSource]="data" class="example-table"
             matSort matSortActive="created" matSortDisableClear matSortDirection="desc">
        <!-- Number Column -->
        <ng-container matColumnDef="number">
          <th mat-header-cell *matHeaderCellDef>#</th>
          <td mat-cell *matCellDef="let row">{{row.number}}</td>
        </ng-container>
  
        <!-- Title Column -->
        <ng-container matColumnDef="title">
          <th mat-header-cell *matHeaderCellDef>Title</th>
          <td mat-cell *matCellDef="let row">{{row.title}}</td>
        </ng-container>
  
        <!-- State Column -->
        <ng-container matColumnDef="state">
          <th mat-header-cell *matHeaderCellDef>State</th>
          <td mat-cell *matCellDef="let row">{{row.state}}</td>
        </ng-container>
  
        <!-- Created Column -->
        <ng-container matColumnDef="created">
          <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>
            Created
          </th>
          <td mat-cell *matCellDef="let row">{{row.created_at | date}}</td>
        </ng-container>
  
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  
    <mat-paginator [length]="resultsLength" [pageSize]="30" aria-label="Select page of GitHub search results"></mat-paginator>
  </div>`,
    TableRetrievingDataThroughHTTPTS:
    `import {HttpClient} from '@angular/common/http';
    import {Component, ViewChild, AfterViewInit} from '@angular/core';
    import {MatPaginator} from '@angular/material/paginator';
    import {MatSort, SortDirection} from '@angular/material/sort';
    import {merge, Observable, of as observableOf} from 'rxjs';
    import {catchError, map, startWith, switchMap} from 'rxjs/operators';
    
    displayedColumns: string[] = ['created', 'state', 'number', 'title'];
    exampleDatabase: ExampleHttpDatabase | null;
    data: GithubIssue[] = [];
  
    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(private _httpClient: HttpClient) {}
  
    ngAfterViewInit() {
      this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
  
      // If the user changes the sort order, reset back to the first page.
      this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            return this.exampleDatabase!.getRepoIssues(
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex,
            ).pipe(catchError(() => observableOf(null)));
          }),
          map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = data === null;
  
            if (data === null) {
              return [];
            }
  
            // Only refresh the result length if there is new data. In case of rate
            // limit errors, we do not want to reset the paginator to zero, as that
            // would prevent users from re-triggering requests.
            this.resultsLength = data.total_count;
            return data.items;
          }),
        )
        .subscribe(data => (this.data = data));
    }
  }
  
  export interface GithubApi {
    items: GithubIssue[];
    total_count: number;
  }
  
  export interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
  }
  
  /** An example database that the data source uses to retrieve data for the table. */
  export class ExampleHttpDatabase {
    constructor(private _httpClient: HttpClient) {}
  
    getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi> {
      const href = 'https://api.github.com/search/issues';
      const requestUrl = '$ {href}?q=repo:angular/components&sort=$ {sort}&order=$ {order}&page=$ {
        page + 1
      }';
  
      return this._httpClient.get<GithubApi>(requestUrl);
    }`,
    TableRetrievingDataThroughHTTPCSS:
    `/* Structure */
    .example-container {
      position: relative;
    }
    
    .example-table-container {
      position: relative;
      min-height: 200px;
      max-height: 400px;
      overflow: auto;
    }
    
    table {
      width: 100%;
    }
    
    .example-loading-shade {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 56px;
      right: 0;
      background: rgba(0, 0, 0, 0.15);
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .example-rate-limit-reached {
      max-width: 360px;
      text-align: center;
    }
    
    /* Column Widths */
    .mat-column-number,
    .mat-column-state {
      max-width: 64px;
    }
    
    .mat-column-created {
      max-width: 124px;
    }`,


    DataTableWithSortingPaginationFilteringHTML:
    `<mat-form-field>
    <mat-label>Filter</mat-label>
    <input matInput (keyup)="applyFilter($event)" placeholder="Ex. Mia" #input>
  </mat-form-field>
  
  <div class="mat-elevation-z8">
    <table mat-table [dataSource]="dataSource" matSort>
  
      <!-- ID Column -->
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
        <td mat-cell *matCellDef="let row"> {{row.id}} </td>
      </ng-container>
  
      <!-- Progress Column -->
      <ng-container matColumnDef="progress">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>
        <td mat-cell *matCellDef="let row"> {{row.progress}}% </td>
      </ng-container>
  
      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
        <td mat-cell *matCellDef="let row"> {{row.name}} </td>
      </ng-container>
  
      <!-- Fruit Column -->
      <ng-container matColumnDef="fruit">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>
        <td mat-cell *matCellDef="let row"> {{row.fruit}} </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  
      <!-- Row shown when there is no matching data. -->
      <tr class="mat-row" *matNoDataRow>
        <td class="mat-cell" colspan="4">No data matching the filter "{{input.value}}"</td>
      </tr>
    </table>
  
    <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page of users"></mat-paginator>
  </div>
  `,
    DataTableWithSortingPaginationFilteringTS:
    `import {AfterViewInit, Component, ViewChild} from '@angular/core';
    import {MatPaginator} from '@angular/material/paginator';
    import {MatSort} from '@angular/material/sort';
    import {MatTableDataSource} from '@angular/material/table';
    
    export interface UserData {
      id: string;
      name: string;
      progress: string;
      fruit: string;
    }
    
    /** Constants used to fill up our data base. */
    const FRUITS: string[] = [
      'blueberry',
      'lychee',
      'kiwi',
      'mango',
      'peach',
      'lime',
      'pomegranate',
      'pineapple',
    ];
    const NAMES: string[] = [
      'Maia',
      'Asher',
      'Olivia',
      'Atticus',
      'Amelia',
      'Jack',
      'Charlotte',
      'Theodore',
      'Isla',
      'Oliver',
      'Isabella',
      'Jasper',
      'Cora',
      'Levi',
      'Violet',
      'Arthur',
      'Mia',
      'Thomas',
      'Elizabeth',
    ];
    displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor() {
      // Create 100 users
      const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
  
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
    }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  
  /** Builds and returns a new User. */
  function createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };`,
    DataTableWithSortingPaginationFilteringCSS:
    `table {
      width: 100%;
    }
    
    .mat-mdc-form-field {
      font-size: 14px;
      width: 100%;
    }
    
    td, th {
      width: 25%;
    }`,
    
    TableWithPaginationHTML:
    `<div class="mat-elevation-z8">
    <table mat-table [dataSource]="dataSource">
  
      <!-- Position Column -->
      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
      </ng-container>
  
      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>
  
      <!-- Weight Column -->
      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef> Weight </th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
      </ng-container>
  
      <!-- Symbol Column -->
      <ng-container matColumnDef="symbol">
        <th mat-header-cell *matHeaderCellDef> Symbol </th>
        <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  
    <mat-paginator [pageSizeOptions]="[5, 10, 20]"
                   showFirstLastButtons
                   aria-label="Select page of periodic elements">
    </mat-paginator>
    </div>`,
    TableWithPaginationTS:
    `export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ];
    
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }`,

    TableReOrderableColumnsHTML:
    `<table mat-table
    [dataSource]="dataSource" 
    cdkDropList
    cdkDropListOrientation="horizontal"
    (cdkDropListDropped)="drop($event)">

    <ng-container matColumnDef="position">
    <th mat-header-cell cdkDrag *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>

    <ng-container matColumnDef="name">
    <th mat-header-cell cdkDrag *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>

    <ng-container matColumnDef="weight">
    <th mat-header-cell cdkDrag *matHeaderCellDef> Weight </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>

    <ng-container matColumnDef="symbol">
    <th mat-header-cell cdkDrag *matHeaderCellDef> Symbol </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="columns"></tr>
    <tr mat-row *matRowDef="let row; columns: columns;"></tr>
    </table>`,
    TableReOrderableColumnsTS:
    `import {Component} from '@angular/core';
    import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
    columns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
  
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }`,

    TableWithSelectionHTML:
    `<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <!-- Checkbox Column -->
    <ng-container matColumnDef="select">
      <th mat-header-cell *matHeaderCellDef>
        <mat-checkbox (change)="$event ? toggleAllRows() : null"
                      [checked]="selection.hasValue() && isAllSelected()"
                      [indeterminate]="selection.hasValue() && !isAllSelected()"
                      [aria-label]="checkboxLabel()">
        </mat-checkbox>
      </th>
      <td mat-cell *matCellDef="let row">
        <mat-checkbox (click)="$event.stopPropagation()"
                      (change)="$event ? selection.toggle(row) : null"
                      [checked]="selection.isSelected(row)"
                      [aria-label]="checkboxLabel(row)">
        </mat-checkbox>
      </td>
    </ng-container>
  
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef> Weight </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef> Symbol </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"
        (click)="selection.toggle(row)">
    </tr>
    </table>`, 
    TableWithSelectionTS:
    `import {SelectionModel} from '@angular/cdk/collections';
    import {Component} from '@angular/core';
    import {MatTableDataSource} from '@angular/material/table';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    `,

    tableWithSortingHTML:
    `<table mat-table [dataSource]="dataSource" matSort (matSortChange)="announceSortChange($event)"
    class="mat-elevation-z8">

      <!-- Position Column -->
      <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by number">
        No.
      </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by name">
        Name
      </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by weight">
        Weight
      </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by symbol">
        Symbol
      </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>`,
    tableWithSortingTS:
    `import {LiveAnnouncer} from '@angular/cdk/a11y';
    import {AfterViewInit, Component, ViewChild} from '@angular/core';
    import {MatSort, Sort} from '@angular/material/sort';
    import {MatTableDataSource} from '@angular/material/table';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce('Sorted $ {sortState.direction}ending');
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }`,
    tableWithSortingCSS:
    `table {
      width: 100%;
    }
    
    th.mat-sort-header-sorted {
      color: black;
    }`,

    TableWrapATableComponentDefinitionBehaviorReuseHTML:
    `<div>
    <button mat-raised-button (click)="clearTable()">Clear table</button>
    <button mat-raised-button (click)="addData()">Add data</button>
  </div>
  
  <wrapper-table [dataSource]="dataSource" [columns]="displayedColumns"
                 matSort #sort="matSort">
    <!-- Custom column definition to be provided to the wrapper table. -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
  
    <!-- Custom row definitions to be provided to the wrapper table. -->
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  
    <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->
    <tr class="mat-row" *matNoDataRow>
      <td class="mat-cell" colspan="4">No data</td>
    </tr>
    </wrapper-table>`,
    TableWrapATableComponentDefinitionBehaviorReuseTS:
    `import {DataSource} from '@angular/cdk/collections';
    import {
      AfterContentInit,
      Component,
      ContentChildren,
      Input,
      AfterViewInit,
      QueryList,
      ViewChild,
      ContentChild,
    } from '@angular/core';
    import {MatSort} from '@angular/material/sort';
    import {
      MatColumnDef,
      MatHeaderRowDef,
      MatNoDataRow,
      MatRowDef,
      MatTable,
      MatTableDataSource,
    } from '@angular/material/table';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
    /**
     * @title Table example that shows how to wrap a table component for definition and behavior reuse.
     */
    @Component({
      selector: 'table-wrapped-example',
      styleUrls: ['table-wrapped-example.css'],
      templateUrl: 'table-wrapped-example.html',
    })
    export class TableWrappedExample implements AfterViewInit {
      displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
      dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
      @ViewChild('sort') sort: MatSort;
    
      ngAfterViewInit() {
        this.dataSource.sort = this.sort;
      }
    
      clearTable() {
        this.dataSource.data = [];
      }
    
      addData() {
        this.dataSource.data = ELEMENT_DATA;
      }
    }
    
    /**
     * Table component that accepts column and row definitions in its content to be registered to the
     * table.
     */
    @Component({
      selector: 'wrapper-table',
      templateUrl: 'wrapper-table.html',
      styles: [
        '
        table {
          width: 100%;
        }
      ',
      ],
    })
    export class WrapperTable<T> implements AfterContentInit {
      @ContentChildren(MatHeaderRowDef) headerRowDefs: QueryList<MatHeaderRowDef>;
      @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;
      @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
      @ContentChild(MatNoDataRow) noDataRow: MatNoDataRow;
    
      @ViewChild(MatTable, {static: true}) table: MatTable<T>;
    
      @Input() columns: string[];
    
      @Input() dataSource: DataSource<T>;
    
      ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
        this.table.setNoDataRow(this.noDataRow);
      }
    }
    `,
    tableComponentExampleHTML:
    `<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
    <ng-content></ng-content>
  
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>
  
    <!-- Color Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef> Symbol </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>
    </table>`,


    FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsHTML:
    `<div>
    <button mat-raised-button (click)="tables.push(tables.length)">Add table</button>
    <button mat-raised-button (click)="tables.pop()">Remove table</button>
  </div>
  
  <div>
    Sticky Headers:
    <mat-button-toggle-group multiple [value]="['header-1']"
                             #stickyHeaders="matButtonToggleGroup"
                             class="example-sticky-toggle-group">
      <mat-button-toggle value="header-1"> Row 1 </mat-button-toggle>
      <mat-button-toggle value="header-2"> Row 2 </mat-button-toggle>
    </mat-button-toggle-group>
  </div>
  
  <div>
    Sticky Footers:
    <mat-button-toggle-group multiple [value]="['footer-1']"
                             #stickyFooters="matButtonToggleGroup"
                             class="example-sticky-toggle-group">
      <mat-button-toggle value="footer-1"> Row 1 </mat-button-toggle>
      <mat-button-toggle value="footer-2"> Row 2 </mat-button-toggle>
    </mat-button-toggle-group>
  </div>
  
  <div>
    Sticky Columns:
    <mat-button-toggle-group multiple [value]="['position', 'symbol']"
                             #stickyColumns="matButtonToggleGroup"
                             class="example-sticky-toggle-group">
      <mat-button-toggle value="position"> Position </mat-button-toggle>
      <mat-button-toggle value="name"> Name </mat-button-toggle>
      <mat-button-toggle value="weight"> Weight </mat-button-toggle>
      <mat-button-toggle value="symbol"> Symbol </mat-button-toggle>
    </mat-button-toggle-group>
  </div>
  
  <section class="example-container mat-elevation-z8" tabindex="0">
    <mat-table [dataSource]="dataSource" *ngFor="let table of tables">
      <ng-container matColumnDef="position" [sticky]="isSticky(stickyColumns, 'position')">
        <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
        <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>
      </ng-container>
  
      <ng-container matColumnDef="name" [sticky]="isSticky(stickyColumns, 'name')">
        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
        <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>
      </ng-container>
  
      <ng-container matColumnDef="weight" [stickyEnd]="isSticky(stickyColumns, 'weight')">
        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
        <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>
      </ng-container>
  
      <ng-container matColumnDef="symbol" [stickyEnd]="isSticky(stickyColumns, 'symbol')">
        <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
        <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>
      </ng-container>
  
      <ng-container matColumnDef="filler">
        <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>
        <mat-cell *matCellDef="let element"> Filler data cell </mat-cell>
        <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>
      </ng-container>
  
      <mat-header-row *matHeaderRowDef="displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')"></mat-header-row>
      <mat-header-row *matHeaderRowDef="displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')"></mat-header-row>
  
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  
      <mat-footer-row *matFooterRowDef="displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')"></mat-footer-row>
      <mat-footer-row *matFooterRowDef="displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')"></mat-footer-row>
    </mat-table>
    </section>`,
    FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsTS:
    `import {Component} from '@angular/core';
    import {MatButtonToggleGroup} from '@angular/material/button-toggle';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
    displayedColumns: string[] = [];
    dataSource = ELEMENT_DATA;
  
    tables = [0];
  
    constructor() {
      this.displayedColumns.length = 24;
      this.displayedColumns.fill('filler');
  
      // The first two columns should be position and name; the last two columns: weight, symbol
      this.displayedColumns[0] = 'position';
      this.displayedColumns[1] = 'name';
      this.displayedColumns[22] = 'weight';
      this.displayedColumns[23] = 'symbol';
    }
  
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
      return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }`,
    FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsCSS:
    `.example-container {
      height: 400px;
      overflow: auto;
    }
    
    .mat-mdc-table-sticky {
      background: #59abfd;
      opacity: 1;
    }
    
    .example-sticky-toggle-group {
      margin: 8px;
    }
    
    .mat-column-filler {
      padding: 0 8px;
      font-size: 10px;
      text-align: center;
    }
    
    .mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {
      min-width: 80px;
      box-sizing: border-box;
    }
    
    .mat-mdc-header-row, .mat-mdc-footer-row, .mat-mdc-row {
      min-width: 1920px; /* 24 columns, 80px each */
    }
    
    .mat-mdc-table-sticky-border-elem-top {
      border-bottom: 2px solid midnightblue;
    }
    
    .mat-mdc-table-sticky-border-elem-right {
      border-left: 2px solid midnightblue;
    }
    
    .mat-mdc-table-sticky-border-elem-bottom {
      border-top: 2px solid midnightblue;
    }
    
    .mat-mdc-table-sticky-border-elem-left {
      border-right: 2px solid midnightblue;
    }`,


    TablesWithToggleableStickyHeadersFootersColumnsHTML:
    `<div>
    <button mat-raised-button (click)="tables.push(tables.length)">Add table</button>
    <button mat-raised-button (click)="tables.pop()">Remove table</button>
  </div>
  
  <div>
    Sticky Headers:
    <mat-button-toggle-group multiple [value]="['header-1']"
                             #stickyHeaders="matButtonToggleGroup"
                             class="example-sticky-toggle-group">
      <mat-button-toggle value="header-1"> Row 1 </mat-button-toggle>
      <mat-button-toggle value="header-2"> Row 2 </mat-button-toggle>
    </mat-button-toggle-group>
  </div>
  
  <div>
    Sticky Footers:
    <mat-button-toggle-group multiple [value]="['footer-1']"
                             #stickyFooters="matButtonToggleGroup"
                             class="example-sticky-toggle-group">
      <mat-button-toggle value="footer-1"> Row 1 </mat-button-toggle>
      <mat-button-toggle value="footer-2"> Row 2 </mat-button-toggle>
    </mat-button-toggle-group>
  </div>
  
  <div>
    Sticky Columns:
    <mat-button-toggle-group multiple [value]="['position', 'symbol']"
                             #stickyColumns="matButtonToggleGroup"
                             class="example-sticky-toggle-group">
      <mat-button-toggle value="position"> Position </mat-button-toggle>
      <mat-button-toggle value="name"> Name </mat-button-toggle>
      <mat-button-toggle value="weight"> Weight </mat-button-toggle>
      <mat-button-toggle value="symbol"> Symbol </mat-button-toggle>
    </mat-button-toggle-group>
  </div>
  
  <section class="example-container mat-elevation-z8" tabindex="0">
    <table mat-table [dataSource]="dataSource" *ngFor="let table of tables">
      <ng-container matColumnDef="position" [sticky]="isSticky(stickyColumns, 'position')">
        <th mat-header-cell *matHeaderCellDef> Position </th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
        <td mat-footer-cell *matFooterCellDef> Position Footer </td>
      </ng-container>
  
      <ng-container matColumnDef="name" [sticky]="isSticky(stickyColumns, 'name')">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        <td mat-footer-cell *matFooterCellDef> Name Footer </td>
      </ng-container>
  
      <ng-container matColumnDef="weight" [stickyEnd]="isSticky(stickyColumns, 'weight')">
        <th mat-header-cell *matHeaderCellDef> Weight </th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
        <td mat-footer-cell *matFooterCellDef> Weight Footer </td>
      </ng-container>
  
      <ng-container matColumnDef="symbol" [stickyEnd]="isSticky(stickyColumns, 'symbol')">
        <th mat-header-cell *matHeaderCellDef> Symbol </th>
        <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
        <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>
      </ng-container>
  
      <ng-container matColumnDef="filler">
        <th mat-header-cell *matHeaderCellDef> Filler header cell </th>
        <td mat-cell *matCellDef="let element"> Filler data cell </td>
        <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>
      </ng-container>
  
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')"></tr>
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')"></tr>
  
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  
      <tr mat-footer-row *matFooterRowDef="displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')"></tr>
      <tr mat-footer-row *matFooterRowDef="displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')"></tr>
    </table>
    </section>`,
    TablesWithToggleableStickyHeadersFootersColumnsTS:
    `import {Component} from '@angular/core';
    import {MatButtonToggleGroup} from '@angular/material/button-toggle';
    
    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }
    
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
    displayedColumns: string[] = [];
    dataSource = ELEMENT_DATA;
  
    tables = [0];
  
    constructor() {
      this.displayedColumns.length = 24;
      this.displayedColumns.fill('filler');
  
      // The first two columns should be position and name; the last two columns: weight, symbol
      this.displayedColumns[0] = 'position';
      this.displayedColumns[1] = 'name';
      this.displayedColumns[22] = 'weight';
      this.displayedColumns[23] = 'symbol';
    }
  
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
      return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }`,
    TablesWithToggleableStickyHeadersFootersColumnsCSS:
    `.example-container {
      height: 400px;
      overflow: auto;
    }
    
    .mat-mdc-table-sticky {
      background: #59abfd;
      opacity: 1;
    }
    
    .example-sticky-toggle-group {
      margin: 8px;
    }
    
    .mat-column-filler {
      padding: 0 8px;
      font-size: 10px;
      text-align: center;
    }
    
    .mat-mdc-header-cell, .mat-mdc-footer-cell, .mat-mdc-cell {
      min-width: 80px;
      box-sizing: border-box;
    }
    
    .mat-mdc-header-row, .mat-mdc-footer-row, .mat-mdc-row {
      min-width: 1920px; /* 24 columns, 80px each */
    }
    
    .mat-mdc-table-sticky-border-elem-top {
      border-bottom: 2px solid midnightblue;
    }
    
    .mat-mdc-table-sticky-border-elem-right {
      border-left: 2px solid midnightblue;
    }
    
    .mat-mdc-table-sticky-border-elem-bottom {
      border-top: 2px solid midnightblue;
    }
    
    .mat-mdc-table-sticky-border-elem-left {
      border-right: 2px solid midnightblue;
    }`,


 


    
}