
import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { tableData } from '../tableData';

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


  BasicUseHTML: string = tableData.BasicUseHTML;
  BasicUseTS: string = tableData.BasicUseTS;
  TableDynamicallyChangingTheColumnsDisplayedHTML: string = tableData.TableDynamicallyChangingTheColumnsDisplayedHTML;
  TableDynamicallyChangingTheColumnsDisplayedTS: string = tableData.TableDynamicallyChangingTheColumnsDisplayedTS;
  TableWithFilteringHTML: string = tableData.TableWithFilteringHTML;
  TableWithFilteringTS: string = tableData.TableWithFilteringTS;
  FlexTableWhereOneColumnsCellsHasGreaterHheightThanOthersHTML: string = tableData.FlexTableWhereOneColumnsCellsHasGreaterHheightThanOthersHTML;
  FlexTableWhereOneColumnsCellsHasGreaterHheightThanOthersTS: string = tableData.FlexTableWhereOneColumnsCellsHasGreaterHheightThanOthersTS;
  FooterRowTableHTML: string = tableData.FooterRowTableHTML;
  FooterRowTableTS: string = tableData.FooterRowTableTS;
  TableWithMultipleHeaderAndFooterRowsHTML: string = tableData.TableWithMultipleHeaderAndFooterRowsHTML;
  TableWithMultipleHeaderAndFooterRowsTS: string = tableData.TableWithMultipleHeaderAndFooterRowsTS;
  BindingEventHandlersAndPropertiesToTheTableRowsHTML: string = tableData.BindingEventHandlersAndPropertiesToTheTableRowsHTML;
  BindingEventHandlersAndPropertiesToTheTableRowsTS: string = tableData.BindingEventHandlersAndPropertiesToTheTableRowsTS;
  TableWithStickyColumnsHTML: string = tableData.TableWithStickyColumnsHTML;
  TableWithStickyColumnsTS: string = tableData.TableWithStickyColumnsTS;
  TableWithStickyFooterHTML: string = tableData.TableWithStickyFooterHTML;
  TableWithStickyFooterTS: string = tableData.TableWithStickyFooterTS;
  TableWithStickyHeaderHTML: string = tableData.TableWithStickyHeaderHTML;
  TableWithStickyHeaderTS: string = tableData.TableWithStickyHeaderTS;
  matTextColumnWithVariousConfigurationsInterfaceHTML: string = tableData.matTextColumnWithVariousConfigurationsInterfaceHTML;
  matTextColumnWithVariousConfigurationsInterfaceTS: string = tableData.matTextColumnWithVariousConfigurationsInterfaceTS;
  matTextColumnDisplayTextValueHTML: string = tableData.matTextColumnDisplayTextValueHTML;
  matTextColumnDisplayTextValueTS: string = tableData.matTextColumnDisplayTextValueTS;
  AddingAndRemovingDataWhenUsingArraybasedDatasourceHTML: string = tableData.AddingAndRemovingDataWhenUsingArraybasedDatasourceHTML;
  AddingAndRemovingDataWhenUsingArraybasedDatasourceTS: string = tableData.AddingAndRemovingDataWhenUsingArraybasedDatasourceTS;
  AddingAndRemovingDataWhenUsingArraybasedDatasourceCSS: string = tableData.AddingAndRemovingDataWhenUsingArraybasedDatasourceCSS;
  AddingAndRemovingDataWhenUsinObservablebasedDatasourceHTML: string = tableData.BasicUseAddingAndRemovingDataWhenUsinObservablebasedDatasourceHTMLHTML;
  AddingAndRemovingDataWhenUsinObservablebasedDatasourceTS: string = tableData.AddingAndRemovingDataWhenUsinObservablebasedDatasourceTS;
  AddingAndRemovingDataWhenUsinObservablebasedDatasourceCSS: string = tableData.AddingAndRemovingDataWhenUsinObservablebasedDatasourceCSS;
  tableWithExpandableRowsHTML: string = tableData.tableWithExpandableRowsHTML;
  tableWithExpandableRowsTS: string = tableData.tableWithExpandableRowsTS;
  tableWithExpandableRowsCSS: string = tableData.tableWithExpandableRowsCSS;
  tableWithColumnsDefinedUsingngForHTML: string = tableData.tableWithColumnsDefinedUsingngForHTML;
  tableWithColumnsDefinedUsingngForTS: string = tableData.tableWithColumnsDefinedUsingngForTS;
  TableRetrievingDataThroughHTTPHTML: string = tableData.TableRetrievingDataThroughHTTPHTML;
  TableRetrievingDataThroughHTTPTS: string = tableData.TableRetrievingDataThroughHTTPTS;
  TableRetrievingDataThroughHTTPCSS: string = tableData.TableRetrievingDataThroughHTTPCSS;
  DataTableWithSortingPaginationFilteringHTML: string = tableData.DataTableWithSortingPaginationFilteringHTML;
  DataTableWithSortingPaginationFilteringTS: string = tableData.DataTableWithSortingPaginationFilteringTS;
  DataTableWithSortingPaginationFilteringCSS: string = tableData.DataTableWithSortingPaginationFilteringCSS;
  TableWithPaginationHTML: string = tableData.TableWithPaginationHTML;
  TableWithPaginationTS: string = tableData.TableWithPaginationTS;
  TableReOrderableColumnsHTML: string = tableData.TableReOrderableColumnsHTML;
  TableReOrderableColumnsTS: string = tableData.TableReOrderableColumnsTS;
  TableWithSelectionHTML: string = tableData.TableWithSelectionHTML;
  TableWithSelectionTS: string = tableData.TableWithSelectionTS;
  tableWithSortingHTML: string = tableData.tableWithSortingHTML;
  tableWithSortingTS: string = tableData.tableWithSortingTS;
  tableWithSortingCSS: string = tableData.tableWithSortingCSS;
  TableWrapATableComponentDefinitionBehaviorReuseHTML: string = tableData.TableWrapATableComponentDefinitionBehaviorReuseHTML;
  TableWrapATableComponentDefinitionBehaviorReuseTS: string = tableData.TableWrapATableComponentDefinitionBehaviorReuseTS;
  tableComponentExampleHTML: string = tableData.tableComponentExampleHTML;
  FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsHTML: string = tableData.FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsHTML;
  FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsTS: string = tableData.FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsTS;
  FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsCSS: string = tableData.FlexLayoutTablesWithToggleableStickyHeadersFootersColumnsCSS;
  TablesWithToggleableStickyHeadersFootersColumnsHTML: string = tableData.TablesWithToggleableStickyHeadersFootersColumnsHTML;
  TablesWithToggleableStickyHeadersFootersColumnsTS: string = tableData.TablesWithToggleableStickyHeadersFootersColumnsTS;
  TablesWithToggleableStickyHeadersFootersColumnsCSS: string = tableData.TablesWithToggleableStickyHeadersFootersColumnsCSS;


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


  //Footer row table + Table with multiple header and footer rows + Table with a sticky footer
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

  //Table with sticky header
  displayedColumns8 = ['position', 'name', 'weight', 'symbol'];
  dataSource8 = ELEMENT_DATA;

  //Use of 'mat-text-column' with various configurations of the interface.
  displayedColumns9: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource9 = new MatTableDataSource(ELEMENT_DATA);

  headerText!: string;

  decimalPipe = new DecimalPipe('en-US');

  /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
  getWeight = (data: PeriodicElement): string => {
    const result = this.decimalPipe.transform(data.weight, '1.0-2');
    return result === null ? '' : result;
  };

  //Use of `mat-text-column` which can be used for simple columns that only need to display a text value for the header and cells.
  displayedColumns10: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource10 = ELEMENT_DATA;

}

