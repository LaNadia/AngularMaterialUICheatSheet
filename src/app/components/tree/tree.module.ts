import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeChecklistExample } from './components/tree-checklist-example/tree-checklist-example.component';
import { MaterialExportModule } from 'src/app/material-export/material-export.module';
import { TreeComponent } from './tree.component';
import { TreeDynamicExample } from './components/tree-dynamic-example/tree-dynamic-example.component';
import { TreeFlatOverviewExample } from './components/tree-flat-overview-example/tree-flat-overview-example.component';
import { TreeLoadmoreExample } from './components/tree-loadmore-example/tree-loadmore-example.component';
import { TreeNestedOverviewExample } from './components/tree-nested-overview-example/tree-nested-overview-example.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TreeComponent,
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample
  ],
  imports: [
    CommonModule,
    MaterialExportModule,
    CodemirrorModule,
    FormsModule
  ],
  exports: [
    TreeComponent,
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample
  ]
})
export class TreeModule { }
