import { Component } from '@angular/core';
import { treeData } from './treeData';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  treeChecklistExampleHTML: string = treeData.treeChecklistExampleHTML;
  treeChecklistExampleTS: string = treeData.treeChecklistExampleTS;
  TreeWithDynamicDataHTML: string = treeData.TreeWithDynamicDataHTML;
  TreeWithDynamicDataTS: string = treeData.TreeWithDynamicDataTS;
  TreeWithFlatNodesHTML: string = treeData.TreeWithFlatNodesHTML;
  TreeWithFlatNodesTS: string = treeData.TreeWithFlatNodesTS;
  TreeWithPartiallyLoadedDataHTML: string = treeData.TreeWithPartiallyLoadedDataHTML;
  TreeWithPartiallyLoadedDataTS: string = treeData.TreeWithPartiallyLoadedDataTS;
  TreeWithNestedNodesHTML: string = treeData.TreeWithNestedNodesHTML;
  TreeWithNestedNodesTS: string = treeData.TreeWithNestedNodesTS;
  TreeWithNestedNodesCSS: string = treeData.TreeWithNestedNodesCSS;
}
