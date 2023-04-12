import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { MaterialExportModule } from 'src/app/material-export/material-export.module';
import { TableComponent } from './table/table.component';
import { AddingRemovingArrayBasedDatasourceComponent } from './adding-removing-array-based-datasource/adding-removing-array-based-datasource.component';
import { AddingRemovingDataObservableBasedDatasourceComponent } from './adding-removing-data-observable-based-datasource/adding-removing-data-observable-based-datasource.component';
import { TableWithExpandableRowsComponent } from './table-with-expandable-rows/table-with-expandable-rows.component';
import { TableWithColumnsDefinedUsingngForComponent } from './table-with-columns-defined-usingng-for/table-with-columns-defined-usingng-for.component';
import { TableRetrievingDataThroughHTTPComponent } from './table-retrieving-data-through-http/table-retrieving-data-through-http.component';
import { DataTableWithSortingPaginationFilteringComponent } from './data-table-with-sorting-pagination-filtering/data-table-with-sorting-pagination-filtering.component';
import { TableWithPaginationComponent } from './table-with-pagination/table-with-pagination.component';
import { TableWithReOrderableColumnsComponent } from './table-with-re-orderable-columns/table-with-re-orderable-columns.component';
import { TableWithSelectionComponent } from './table-with-selection/table-with-selection.component';
import { TableWithSortingComponent } from './table-with-sorting/table-with-sorting.component';
import { TableWrapATableComponentDefinitionBehaviorReuseComponent, WrapperTable } from './table-wrap-a-table-component-definition-behavior-reuse/table-wrap-a-table-component-definition-behavior-reuse.component';
import { TablesWithToggleAbleStickyHeadersFootersAndColumnsComponent } from './tables-with-toggle-able-sticky-headers-footers-and-columns/tables-with-toggle-able-sticky-headers-footers-and-columns.component';
import { FlexTablesWithToggleAbleStickyHeadersFootersAndColumnsComponent } from './flex-tables-with-toggle-able-sticky-headers-footers-and-columns/flex-tables-with-toggle-able-sticky-headers-footers-and-columns.component';


@NgModule({
  declarations: [
    TableComponent,
    AddingRemovingArrayBasedDatasourceComponent,
    AddingRemovingDataObservableBasedDatasourceComponent,
    TableWithExpandableRowsComponent,
    TableWithColumnsDefinedUsingngForComponent,
    TableRetrievingDataThroughHTTPComponent,
    DataTableWithSortingPaginationFilteringComponent,
    TableWithPaginationComponent,
    TableWithReOrderableColumnsComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    TableWrapATableComponentDefinitionBehaviorReuseComponent,
    WrapperTable,
    TablesWithToggleAbleStickyHeadersFootersAndColumnsComponent,
    FlexTablesWithToggleAbleStickyHeadersFootersAndColumnsComponent
  ],
  imports: [
    CommonModule,
    MaterialExportModule,
    CodemirrorModule,
  ],
  exports: [
    TableComponent,
    AddingRemovingArrayBasedDatasourceComponent,
    AddingRemovingDataObservableBasedDatasourceComponent,
    TableWithExpandableRowsComponent,
    TableWithColumnsDefinedUsingngForComponent,
    TableRetrievingDataThroughHTTPComponent,
    TableWithPaginationComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    WrapperTable,
    TablesWithToggleAbleStickyHeadersFootersAndColumnsComponent,
    FlexTablesWithToggleAbleStickyHeadersFootersAndColumnsComponent
  ]
})
export class TableModule { }
