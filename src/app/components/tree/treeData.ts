export const treeData: any = {

    treeChecklistExampleHTML:
    `<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
    <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle matTreeNodePadding>
      <button mat-icon-button disabled></button>
      <mat-checkbox class="checklist-leaf-node"
                    [checked]="checklistSelection.isSelected(node)"
                    (change)="todoLeafItemSelectionToggle(node)">{{node.item}}</mat-checkbox>
    </mat-tree-node>
  
    <mat-tree-node *matTreeNodeDef="let node; when: hasNoContent" matTreeNodePadding>
      <button mat-icon-button disabled></button>
      <mat-form-field appearance="fill">
        <mat-label>New item...</mat-label>
        <input matInput #itemValue placeholder="Ex. Lettuce">
      </mat-form-field>
      <button mat-button (click)="saveNode(node, itemValue.value)">Save</button>
    </mat-tree-node>
  
    <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
      <button mat-icon-button matTreeNodeToggle
              [attr.aria-label]="'Toggle ' + node.item">
        <mat-icon class="mat-icon-rtl-mirror">
          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
        </mat-icon>
      </button>
      <mat-checkbox [checked]="descendantsAllSelected(node)"
                    [indeterminate]="descendantsPartiallySelected(node)"
                    (change)="todoItemSelectionToggle(node)">{{node.item}}</mat-checkbox>
      <button mat-icon-button (click)="addNewItem(node)"><mat-icon>add</mat-icon></button>
    </mat-tree-node>
    </mat-tree>`,
    treeChecklistExampleTS:
    `import {SelectionModel} from '@angular/cdk/collections';
    import {FlatTreeControl} from '@angular/cdk/tree';
    import {Component, Injectable} from '@angular/core';
    import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
    import {BehaviorSubject} from 'rxjs';
    
    /**
     * Node for to-do item
     */
    export class TodoItemNode {
      children: TodoItemNode[];
      item: string;
    }
    
    /** Flat to-do item node with expandable and level information */
    export class TodoItemFlatNode {
      item: string;
      level: number;
      expandable: boolean;
    }
    
    /**
     * The Json object for to-do list data.
     */
    const TREE_DATA = {
      Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
          Apple: null,
          Berries: ['Blueberry', 'Raspberry'],
          Orange: null,
        },
      },
      Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
    };
    
    /**
     * Checklist database, it can build a tree structured Json object.
     * Each node in Json object represents a to-do item or a category.
     * If a node is a category, it has children items and new items can be added under the category.
     */
    @Injectable()
    export class ChecklistDatabase {
      dataChange = new BehaviorSubject<TodoItemNode[]>([]);
    
      get data(): TodoItemNode[] {
        return this.dataChange.value;
      }
    
      constructor() {
        this.initialize();
      }
    
      initialize() {
        // Build the tree nodes from Json object. The result is a list of 'TodoItemNode' with nested
        //     file node as children.
        const data = this.buildFileTree(TREE_DATA, 0);
    
        // Notify the change.
        this.dataChange.next(data);
      }
    
      /**
       * Build the file structure tree. The 'value' is the Json object, or a sub-tree of a Json object.
       * The return value is the list of 'TodoItemNode'.
       */
      buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
        return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
          const value = obj[key];
          const node = new TodoItemNode();
          node.item = key;
    
          if (value != null) {
            if (typeof value === 'object') {
              node.children = this.buildFileTree(value, level + 1);
            } else {
              node.item = value;
            }
          }
    
          return accumulator.concat(node);
        }, []);
      }
    
      /** Add an item to to-do list */
      insertItem(parent: TodoItemNode, name: string) {
        if (parent.children) {
          parent.children.push({item: name} as TodoItemNode);
          this.dataChange.next(this.data);
        }
      }
    
      updateItem(node: TodoItemNode, name: string) {
        node.item = name;
        this.dataChange.next(this.data);
      }
    }
    
    /**
     * @title Tree with checkboxes
     */
    @Component({
      selector: 'tree-checklist-example',
      templateUrl: 'tree-checklist-example.html',
      styleUrls: ['tree-checklist-example.css'],
      providers: [ChecklistDatabase],
    })
    export class TreeChecklistExample {
      /** Map from flat node to nested node. This helps us finding the nested node to be modified */
      flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();
    
      /** Map from nested node to flattened node. This helps us to keep the same object for selection */
      nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();
    
      /** A selected parent node to be inserted */
      selectedParent: TodoItemFlatNode | null = null;
    
      /** The new item's name */
      newItemName = '';
    
      treeControl: FlatTreeControl<TodoItemFlatNode>;
    
      treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
    
      dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
    
      /** The selection for checklist */
      checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);
    
      constructor(private _database: ChecklistDatabase) {
        this.treeFlattener = new MatTreeFlattener(
          this.transformer,
          this.getLevel,
          this.isExpandable,
          this.getChildren,
        );
        this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    
        _database.dataChange.subscribe(data => {
          this.dataSource.data = data;
        });
      }
    
      getLevel = (node: TodoItemFlatNode) => node.level;
    
      isExpandable = (node: TodoItemFlatNode) => node.expandable;
    
      getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;
    
      hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;
    
      hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';
    
      /**
       * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
       */
      transformer = (node: TodoItemNode, level: number) => {
        const existingNode = this.nestedNodeMap.get(node);
        const flatNode =
          existingNode && existingNode.item === node.item ? existingNode : new TodoItemFlatNode();
        flatNode.item = node.item;
        flatNode.level = level;
        flatNode.expandable = !!node.children?.length;
        this.flatNodeMap.set(flatNode, node);
        this.nestedNodeMap.set(node, flatNode);
        return flatNode;
      };
    
      /** Whether all the descendants of the node are selected. */
      descendantsAllSelected(node: TodoItemFlatNode): boolean {
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected =
          descendants.length > 0 &&
          descendants.every(child => {
            return this.checklistSelection.isSelected(child);
          });
        return descAllSelected;
      }
    
      /** Whether part of the descendants are selected */
      descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some(child => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
      }
    
      /** Toggle the to-do item selection. Select/deselect all the descendants node */
      todoItemSelectionToggle(node: TodoItemFlatNode): void {
        this.checklistSelection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
          ? this.checklistSelection.select(...descendants)
          : this.checklistSelection.deselect(...descendants);
    
        // Force update for the parent
        descendants.forEach(child => this.checklistSelection.isSelected(child));
        this.checkAllParentsSelection(node);
      }
    
      /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
      todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
      }
    
      /* Checks all the parents when a leaf node is selected/unselected */
      checkAllParentsSelection(node: TodoItemFlatNode): void {
        let parent: TodoItemFlatNode | null = this.getParentNode(node);
        while (parent) {
          this.checkRootNodeSelection(parent);
          parent = this.getParentNode(parent);
        }
      }
    
      /** Check root node checked state and change it accordingly */
      checkRootNodeSelection(node: TodoItemFlatNode): void {
        const nodeSelected = this.checklistSelection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected =
          descendants.length > 0 &&
          descendants.every(child => {
            return this.checklistSelection.isSelected(child);
          });
        if (nodeSelected && !descAllSelected) {
          this.checklistSelection.deselect(node);
        } else if (!nodeSelected && descAllSelected) {
          this.checklistSelection.select(node);
        }
      }
    
      /* Get the parent node of a node */
      getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
        const currentLevel = this.getLevel(node);
    
        if (currentLevel < 1) {
          return null;
        }
    
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    
        for (let i = startIndex; i >= 0; i--) {
          const currentNode = this.treeControl.dataNodes[i];
    
          if (this.getLevel(currentNode) < currentLevel) {
            return currentNode;
          }
        }
        return null;
      }
    
      /** Select the category so we can insert the new item. */
      addNewItem(node: TodoItemFlatNode) {
        const parentNode = this.flatNodeMap.get(node);
        this._database.insertItem(parentNode!, '');
        this.treeControl.expand(node);
      }
    
      /** Save the node to database */
      saveNode(node: TodoItemFlatNode, itemValue: string) {
        const nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem(nestedNode!, itemValue);
      }
    }`,

    TreeWithDynamicDataHTML:
    `<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
    <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
      <button mat-icon-button disabled></button>
      {{node.item}}
    </mat-tree-node>
    <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
      <button mat-icon-button
              [attr.aria-label]="'Toggle ' + node.item" matTreeNodeToggle>
        <mat-icon class="mat-icon-rtl-mirror">
          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
        </mat-icon>
      </button>
      {{node.item}}
      <mat-progress-bar *ngIf="node.isLoading"
                        mode="indeterminate"
                        class="example-tree-progress-bar"></mat-progress-bar>
    </mat-tree-node>
    </mat-tree>`,
    TreeWithDynamicDataTS:
    `import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
    import {FlatTreeControl} from '@angular/cdk/tree';
    import {Component, Injectable} from '@angular/core';
    import {BehaviorSubject, merge, Observable} from 'rxjs';
    import {map} from 'rxjs/operators';
    
    /** Flat node with expandable and level information */
    export class DynamicFlatNode {
      constructor(
        public item: string,
        public level = 1,
        public expandable = false,
        public isLoading = false,
      ) {}
    }
    
    /**
     * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
     * the descendants data from the database.
     */
    @Injectable({providedIn: 'root'})
    export class DynamicDatabase {
      dataMap = new Map<string, string[]>([
        ['Fruits', ['Apple', 'Orange', 'Banana']],
        ['Vegetables', ['Tomato', 'Potato', 'Onion']],
        ['Apple', ['Fuji', 'Macintosh']],
        ['Onion', ['Yellow', 'White', 'Purple']],
      ]);
    
      rootLevelNodes: string[] = ['Fruits', 'Vegetables'];
    
      /** Initial data from database */
      initialData(): DynamicFlatNode[] {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
      }
    
      getChildren(node: string): string[] | undefined {
        return this.dataMap.get(node);
      }
    
      isExpandable(node: string): boolean {
        return this.dataMap.has(node);
      }
    }
    /**
     * File database, it can build a tree structured Json object from string.
     * Each node in Json object represents a file or a directory. For a file, it has filename and type.
     * For a directory, it has filename and children (a list of files or directories).
     * The input will be a json object string, and the output is a list of 'FileNode' with nested
     * structure.
     */
    export class DynamicDataSource implements DataSource<DynamicFlatNode> {
      dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);
    
      get data(): DynamicFlatNode[] {
        return this.dataChange.value;
      }
      set data(value: DynamicFlatNode[]) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
      }
    
      constructor(
        private _treeControl: FlatTreeControl<DynamicFlatNode>,
        private _database: DynamicDatabase,
      ) {}
    
      connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
        this._treeControl.expansionModel.changed.subscribe(change => {
          if (
            (change as SelectionChange<DynamicFlatNode>).added ||
            (change as SelectionChange<DynamicFlatNode>).removed
          ) {
            this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
          }
        });
    
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
      }
    
      disconnect(collectionViewer: CollectionViewer): void {}
    
      /** Handle expand/collapse behaviors */
      handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
        if (change.added) {
          change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
          change.removed
            .slice()
            .reverse()
            .forEach(node => this.toggleNode(node, false));
        }
      }
    
      /**
       * Toggle the node, remove from display list
       */
      toggleNode(node: DynamicFlatNode, expand: boolean) {
        const children = this._database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) {
          // If no children, or cannot find the node, no op
          return;
        }
    
        node.isLoading = true;
    
        setTimeout(() => {
          if (expand) {
            const nodes = children.map(
              name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)),
            );
            this.data.splice(index + 1, 0, ...nodes);
          } else {
            let count = 0;
            for (
              let i = index + 1;
              i < this.data.length && this.data[i].level > node.level;
              i++, count++
            ) {}
            this.data.splice(index + 1, count);
          }
    
          // notify the change
          this.dataChange.next(this.data);
          node.isLoading = false;
        }, 1000);
      }
    }
    
    /**
     * @title Tree with dynamic data
     */
    @Component({
      selector: 'tree-dynamic-example',
      templateUrl: 'tree-dynamic-example.html',
      styleUrls: ['tree-dynamic-example.css'],
    })
    export class TreeDynamicExample {
      constructor(database: DynamicDatabase) {
        this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
    
        this.dataSource.data = database.initialData();
      }
    
      treeControl: FlatTreeControl<DynamicFlatNode>;
    
      dataSource: DynamicDataSource;
    
      getLevel = (node: DynamicFlatNode) => node.level;
    
      isExpandable = (node: DynamicFlatNode) => node.expandable;
    
      hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
    }`,

    TreeWithFlatNodesHTML:
    `<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
    <!-- This is the tree node template for leaf nodes -->
    <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
      <!-- use a disabled button to provide padding for tree leaf -->
      <button mat-icon-button disabled></button>
      {{node.name}}
    </mat-tree-node>
    <!-- This is the tree node template for expandable nodes -->
    <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding>
      <button mat-icon-button matTreeNodeToggle
              [attr.aria-label]="'Toggle ' + node.name">
        <mat-icon class="mat-icon-rtl-mirror">
          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
        </mat-icon>
      </button>
      {{node.name}}
    </mat-tree-node>
  </mat-tree>`,
    TreeWithFlatNodesTS:
    `import {FlatTreeControl} from '@angular/cdk/tree';
    import {Component} from '@angular/core';
    import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
    
    /**
     * Food data with nested structure.
     * Each node has a name and an optional list of children.
     */
    interface FoodNode {
      name: string;
      children?: FoodNode[];
    }
    
    const TREE_DATA: FoodNode[] = [
      {
        name: 'Fruit',
        children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
      },
      {
        name: 'Vegetables',
        children: [
          {
            name: 'Green',
            children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
          },
          {
            name: 'Orange',
            children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
          },
        ],
      },
    ];
    
    /** Flat node with expandable and level information */
    interface ExampleFlatNode {
      expandable: boolean;
      name: string;
      level: number;
    }
    
    /**
     * @title Tree with flat nodes
     */
    @Component({
      selector: 'tree-flat-overview-example',
      templateUrl: 'tree-flat-overview-example.html',
    })
    export class TreeFlatOverviewExample {
      private _transformer = (node: FoodNode, level: number) => {
        return {
          expandable: !!node.children && node.children.length > 0,
          name: node.name,
          level: level,
        };
      };
    
      treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level,
        node => node.expandable,
      );
    
      treeFlattener = new MatTreeFlattener(
        this._transformer,
        node => node.level,
        node => node.expandable,
        node => node.children,
      );
    
      dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    
      constructor() {
        this.dataSource.data = TREE_DATA;
      }
    
      hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
    }`,

    TreeWithPartiallyLoadedDataHTML:
    `<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
    <!-- Leaf node -->
    <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
      <button mat-icon-button disabled></button>
      {{node.item}}
    </mat-tree-node>
  
    <!-- expandable node -->
    <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
      <button mat-icon-button
              [attr.aria-label]="'Toggle ' + node.item"
              (click)="loadChildren(node)"
              matTreeNodeToggle>
        <mat-icon class="mat-icon-rtl-mirror">
          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
        </mat-icon>
      </button>
      {{node.item}}
    </mat-tree-node>
  
    <mat-tree-node *matTreeNodeDef="let node; when: isLoadMore">
      <button mat-button (click)="loadMore(node.loadMoreParentItem)">
        Load more...
      </button>
    </mat-tree-node>
  </mat-tree>`,
  TreeWithPartiallyLoadedDataTS:
  `/**
  * @license
  * Copyright Google LLC All Rights Reserved.
  *
  * Use of this source code is governed by an MIT-style license that can be
  * found in the LICENSE file at https://angular.io/license
  */
 import {FlatTreeControl} from '@angular/cdk/tree';
 import {Component, Injectable} from '@angular/core';
 import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
 import {BehaviorSubject, Observable} from 'rxjs';
 
 const LOAD_MORE = 'LOAD_MORE';
 
 /** Nested node */
 export class LoadmoreNode {
   childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);
 
   get children(): LoadmoreNode[] {
     return this.childrenChange.value;
   }
 
   constructor(
     public item: string,
     public hasChildren = false,
     public loadMoreParentItem: string | null = null,
   ) {}
 }
 
 /** Flat node with expandable and level information */
 export class LoadmoreFlatNode {
   constructor(
     public item: string,
     public level = 1,
     public expandable = false,
     public loadMoreParentItem: string | null = null,
   ) {}
 }
 
 /**
  * A database that only load part of the data initially. After user clicks on the 'Load more'
  * button, more data will be loaded.
  */
 @Injectable()
 export class LoadmoreDatabase {
   batchNumber = 5;
   dataChange = new BehaviorSubject<LoadmoreNode[]>([]);
   nodeMap = new Map<string, LoadmoreNode>();
 
   /** The data */
   rootLevelNodes: string[] = ['Vegetables', 'Fruits'];
   dataMap = new Map<string, string[]>([
     ['Fruits', ['Apple', 'Orange', 'Banana']],
     ['Vegetables', ['Tomato', 'Potato', 'Onion']],
     ['Apple', ['Fuji', 'Macintosh']],
     ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
   ]);
 
   initialize() {
     const data = this.rootLevelNodes.map(name => this._generateNode(name));
     this.dataChange.next(data);
   }
 
   /** Expand a node whose children are not loaded */
   loadMore(item: string, onlyFirstTime = false) {
     if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
       return;
     }
     const parent = this.nodeMap.get(item)!;
     const children = this.dataMap.get(item)!;
     if (onlyFirstTime && parent.children!.length > 0) {
       return;
     }
     const newChildrenNumber = parent.children!.length + this.batchNumber;
     const nodes = children.slice(0, newChildrenNumber).map(name => this._generateNode(name));
     if (newChildrenNumber < children.length) {
       // Need a new load more node
       nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
     }
 
     parent.childrenChange.next(nodes);
     this.dataChange.next(this.dataChange.value);
   }
 
   private _generateNode(item: string): LoadmoreNode {
     if (this.nodeMap.has(item)) {
       return this.nodeMap.get(item)!;
     }
     const result = new LoadmoreNode(item, this.dataMap.has(item));
     this.nodeMap.set(item, result);
     return result;
   }
 }
 
 /**
  * @title Tree with partially loaded data
  */
 @Component({
   selector: 'tree-loadmore-example',
   templateUrl: 'tree-loadmore-example.html',
   providers: [LoadmoreDatabase],
 })
 export class TreeLoadmoreExample {
   nodeMap = new Map<string, LoadmoreFlatNode>();
   treeControl: FlatTreeControl<LoadmoreFlatNode>;
   treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
   // Flat tree data source
   dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;
 
   constructor(private _database: LoadmoreDatabase) {
     this.treeFlattener = new MatTreeFlattener(
       this.transformer,
       this.getLevel,
       this.isExpandable,
       this.getChildren,
     );
 
     this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);
 
     this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
 
     _database.dataChange.subscribe(data => {
       this.dataSource.data = data;
     });
 
     _database.initialize();
   }
 
   getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;
 
   transformer = (node: LoadmoreNode, level: number) => {
     const existingNode = this.nodeMap.get(node.item);
 
     if (existingNode) {
       return existingNode;
     }
 
     const newNode = new LoadmoreFlatNode(
       node.item,
       level,
       node.hasChildren,
       node.loadMoreParentItem,
     );
     this.nodeMap.set(node.item, newNode);
     return newNode;
   };
 
   getLevel = (node: LoadmoreFlatNode) => node.level;
 
   isExpandable = (node: LoadmoreFlatNode) => node.expandable;
 
   hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;
 
   isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;
 
   /** Load more nodes from data source */
   loadMore(item: string) {
     this._database.loadMore(item);
   }
 
   loadChildren(node: LoadmoreFlatNode) {
     this._database.loadMore(node.item, true);
   }
  }`,

  TreeWithNestedNodesHTML:
  `<mat-tree [dataSource]="dataSource" [treeControl]="treeControl" class="example-tree">
  <!-- This is the tree node template for leaf nodes -->
  <!-- There is inline padding applied to this node using styles.
    This padding value depends on the mat-icon-button width. -->
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
      {{node.name}}
  </mat-tree-node>
  <!-- This is the tree node template for expandable nodes -->
  <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
      <div class="mat-tree-node">
        <button mat-icon-button matTreeNodeToggle
                [attr.aria-label]="'Toggle ' + node.name">
          <mat-icon class="mat-icon-rtl-mirror">
            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
          </mat-icon>
        </button>
        {{node.name}}
      </div>
      <!-- There is inline padding applied to this div using styles.
          This padding value depends on the mat-icon-button width.  -->
      <div [class.example-tree-invisible]="!treeControl.isExpanded(node)"
          role="group">
        <ng-container matTreeNodeOutlet></ng-container>
    </div>
  </mat-nested-tree-node>
  </mat-tree>`,
  TreeWithNestedNodesTS:
  `import {NestedTreeControl} from '@angular/cdk/tree';
  import {Component} from '@angular/core';
  import {MatTreeNestedDataSource} from '@angular/material/tree';
  
  /**
   * Food data with nested structure.
   * Each node has a name and an optional list of children.
   */
  interface FoodNode {
    name: string;
    children?: FoodNode[];
  }
  
  const TREE_DATA: FoodNode[] = [
    {
      name: 'Fruit',
      children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
        },
        {
          name: 'Orange',
          children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
        },
      ],
    },
  ];
  
  /**
   * @title Tree with nested nodes
   */
  @Component({
    selector: 'tree-nested-overview-example',
    templateUrl: 'tree-nested-overview-example.html',
    styleUrls: ['tree-nested-overview-example.css'],
  })
  export class TreeNestedOverviewExample {
    treeControl = new NestedTreeControl<FoodNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<FoodNode>();
  
    constructor() {
      this.dataSource.data = TREE_DATA;
    }
  
    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  }`,
  TreeWithNestedNodesCSS:
  `.example-tree-invisible {
    display: none;
  }
  
  .example-tree ul,
  .example-tree li {
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: none;
  }
  
  /*
   * This padding sets alignment of the nested nodes.
   */
  .example-tree .mat-nested-tree-node div[role=group] {
    padding-left: 40px;
  }
  
  /*
   * Padding for leaf nodes.
   * Leaf nodes need to have padding so as to align with other non-leaf nodes
   * under the same parent.
   */
  .example-tree div[role=group] > .mat-tree-node {
    padding-left: 40px;
  }`
  }