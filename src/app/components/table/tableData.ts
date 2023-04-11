
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
    ``,




}