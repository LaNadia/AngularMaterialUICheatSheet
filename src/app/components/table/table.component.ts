import { DataSource } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';

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

interface Transaction {
  item: string;
  cost: number;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  //Basic use
  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = ELEMENT_DATA;



  //Table dynamically changing the columns displayed
  displayedColumns2: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay2: string[] = this.displayedColumns2.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns2.length);
    this.columnsToDisplay2.push(this.displayedColumns2[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay2.length) {
      this.columnsToDisplay2.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay2.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay2[currentIndex];
      this.columnsToDisplay2[currentIndex] = this.columnsToDisplay2[randomIndex];
      this.columnsToDisplay2[randomIndex] = temp;
    }
  }

  
  // TableWithFiltering

  displayedColumns3: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource3 = new MatTableDataSource(ELEMENT_DATA);
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }


  //Flex table where one column's cells has a greater height than others.
  displayedColumns4: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource4 = ELEMENT_DATA;


  //Footer row table + Table with multiple header and footer rows
  displayedColumns5: string[] = ['item', 'cost'];
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
  }
  

  //Binding event handlers and properties to the table rows
  displayedColumns6: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource6 = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  //Table with sticky columns
  displayedColumns7 = [
    'name',
    'position',
    'weight',
    'symbol',
    'position',
    'weight',
    'symbol',
    'star',
  ];
  dataSource7 = ELEMENT_DATA;
}

