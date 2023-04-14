export const tabsData: any  ={

    TabGroupWithAlignedLabelsHTML:
    `<mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
  </mat-tab-group>
  
  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
  </mat-tab-group>
  
  <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="end">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>`,

    TabGroupAnimationsHTML:
    `<h3>No animation</h3>

    <mat-tab-group animationDuration="0ms">
      <mat-tab label="First">Content 1</mat-tab>
      <mat-tab label="Second">Content 2</mat-tab>
      <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>
    
    <h3>Very slow animation</h3>
    <mat-tab-group animationDuration="2000ms">
      <mat-tab label="First">Content 1</mat-tab>
      <mat-tab label="Second">Content 2</mat-tab>
      <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>`,

    TabGroupWithAsynchronouslyLoadingTabContentsHTML:
    `<ng-container *ngIf="(asyncTabs | async) === null">
    Loading tabs...
  </ng-container>
  
  <mat-tab-group>
    <mat-tab *ngFor="let tab of asyncTabs | async">
      <ng-template mat-tab-label>{{tab.label}}</ng-template>
      {{tab.content}}
    </mat-tab>
     </mat-tab-group>`,
    TabGroupWithAsynchronouslyLoadingTabContentsTS:
    `import {Component} from '@angular/core';
    import {Observable, Observer} from 'rxjs';
    
    export interface ExampleTab {
        label: string;
        content: string;
    }
    
    asyncTabs: Observable<ExampleTab[]>;

    constructor() {
        this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
        setTimeout(() => {
            observer.next([
            {label: 'First', content: 'Content 1'},
            {label: 'Second', content: 'Content 2'},
            {label: 'Third', content: 'Content 3'},
            ]);
        }, 1000);
        });
    }
    `,

    BasicUseOfTheTabGroupHTML:
    `<mat-tab-group>
    <mat-tab label="First"> Content 1 </mat-tab>
    <mat-tab label="Second"> Content 2 </mat-tab>
    <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>`,

    UsingTabsWithACustomLabelTemplateHTML:
    `<mat-tab-group>
    <mat-tab>
      <ng-template mat-tab-label>
        <mat-icon class="example-tab-icon">thumb_up</mat-icon>
        First
      </ng-template>
      Content 1
    </mat-tab>
  
    <mat-tab>
      <ng-template mat-tab-label>
        <mat-icon class="example-tab-icon">thumb_up</mat-icon>
        Second
      </ng-template>
      Content 2
    </mat-tab>
  
    <mat-tab>
      <ng-template mat-tab-label>
        <mat-icon class="example-tab-icon">thumb_up</mat-icon>
        Third
      </ng-template>
  
      Content 3
    </mat-tab>
    </mat-tab-group>`,

    TabGroupWithDynamicHeightBasedOnTabContentsHTML:
    `<mat-tab-group dynamicHeight>
    <mat-tab label="Short tab">
      <div class="example-small-box mat-elevation-z4">
        Small content
      </div>
    </mat-tab>
    <mat-tab label="Long tab">
      <div class="example-large-box mat-elevation-z4">
        Large content
      </div>
    </mat-tab>
    </mat-tab-group>`,
    TabGroupWithDynamicHeightBasedOnTabContentsCSS:
    `.example-small-box, .example-large-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 16px;
        padding: 16px;
        border-radius: 8px;
      }
      
      .example-small-box {
        height: 100px;
        width: 100px;
      }
      
      .example-large-box {
        height: 300px;
        width: 300px;
    }`,


    TabGroupWithDynamicallyChangingTabsHTML:
    `<mat-form-field appearance="fill">
    <mat-label>Selected tab index</mat-label>
    <input matInput type="number" [formControl]="selected">
  </mat-form-field>
  
  <div>
    <button mat-raised-button
            class="example-add-tab-button"
            (click)="addTab(selectAfterAdding.checked)">
      Add new tab
    </button>
    <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>
  </div>
  
  <mat-tab-group [selectedIndex]="selected.value"
                 (selectedIndexChange)="selected.setValue($event)">
    <mat-tab *ngFor="let tab of tabs; let index = index" [label]="tab">
      Contents for {{tab}} tab
  
      <button mat-raised-button
              class="example-delete-tab-button"
              [disabled]="tabs.length === 1"
              (click)="removeTab(index)">
        Delete Tab
      </button>
    </mat-tab>
    </mat-tab-group>`,
    TabGroupWithDynamicallyChangingTabsTS:
    ` tabs = ['First', 'Second', 'Third'];
    selected = new FormControl(0);
  
    addTab(selectAfterAdding: boolean) {
      this.tabs.push('New');
  
      if (selectAfterAdding) {
        this.selected.setValue(this.tabs.length - 1);
      }
    }
  
    removeTab(index: number) {
      this.tabs.splice(index, 1);
    }`,
    TabGroupWithDynamicallyChangingTabsCSS:
    `.example-input-label,
    .example-add-tab-button,
    .example-delete-tab-button {
      margin: 8px;
    }`,

    TabGroupWithTheHeadersOnTheBottomHTML:
    `<mat-tab-group headerPosition="below">
    <mat-tab label="First"> Content 1 </mat-tab>
    <mat-tab label="Second"> Content 2 </mat-tab>
    <mat-tab label="Third"> Content 3 </mat-tab>
  </mat-tab-group>`,

    TabGroupWithInkBarFitToContentHTML:
    `<mat-tab-group fitInkBarToContent>
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
    <mat-tab label="Fourth" disabled>Content 4</mat-tab>
    </mat-tab-group>`,

    TabGroupWithInvertedTabsHTML:
    `<mat-tab-group headerPosition="below">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>`,

    TabGroupTabContentIsLoadedLazilyHTML:
    `<mat-tab-group>
    <mat-tab label="First">
      <ng-template matTabContent>
        Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}
      </ng-template>
    </mat-tab>
    <mat-tab label="Second">
      <ng-template matTabContent>
        Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}
      </ng-template>
    </mat-tab>
    <mat-tab label="Third">
      <ng-template matTabContent>
        Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}
      </ng-template>
    </mat-tab>
    </mat-tab-group>`,
    TabGroupTabContentIsLoadedLazilyTS:
    ` tabLoadTimes: Date[] = [];

    getTimeLoaded(index: number) {
      if (!this.tabLoadTimes[index]) {
        this.tabLoadTimes[index] = new Date();
      }
  
      return this.tabLoadTimes[index];
    }`,

    TabGroupWithPaginatedTabsHTML:
    `<mat-tab-group>
    <mat-tab [label]="tab" *ngFor="let tab of lotsOfTabs">Content</mat-tab>
     </mat-tab-group>`,
    TabGroupWithPaginatedTabsTS:
    `lotsOfTabs = new Array(30).fill(0).map((_, index) => 'Tab $ {index}');`,

    TabGroupKeepsContentInsideDOMWhenOffscreenHTML:
    `<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>

    <mat-tab-group preserveContent>
      <mat-tab label="First">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/B-lipaiZII8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </mat-tab>
      <mat-tab label="Second">Note how the video from the previous tab is still playing.</mat-tab>
    </mat-tab-group>`,

    TabGroupWithStretchedLabelsHTML:
    `<mat-tab-group mat-stretch-tabs class="example-stretched-tabs mat-elevation-z4">
    <mat-tab label="First"> Content 1 </mat-tab>
    <mat-tab label="Second"> Content 2 </mat-tab>
    <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>`,

    CustomizingThemeOptionsOnTabGroupHTML:
    `<div>
    <mat-button-toggle-group #colorToggle="matButtonToggleGroup"
                             value="primary"
                             aria-label="Change color">
      <mat-button-toggle value="primary">Primary</mat-button-toggle>
      <mat-button-toggle value="accent">Accent</mat-button-toggle>
      <mat-button-toggle value="warn">Warn</mat-button-toggle>
    </mat-button-toggle-group>
    <span class="example-button-toggle-label">Color</span>
  </div>
  
  <div>
    <mat-button-toggle-group #backgroundColorToggle="matButtonToggleGroup"
                             value="primary"
                             aria-label="Change color">
      <mat-button-toggle value="primary">Primary</mat-button-toggle>
      <mat-button-toggle value="accent">Accent</mat-button-toggle>
      <mat-button-toggle value="warn">Warn</mat-button-toggle>
    </mat-button-toggle-group>
    <span class="example-button-toggle-label">Background Color</span>
  </div>
  
  <mat-tab-group [color]="colorToggle.value" [backgroundColor]="backgroundColorToggle.value">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>`,

    BasicUseOfTabNavBarHTML:
    `<nav mat-tab-nav-bar [backgroundColor]="background" [tabPanel]="tabPanel">
    <a mat-tab-link *ngFor="let link of links"
       (click)="activeLink = link"
       [active]="activeLink == link"> {{link}} </a>
    <a mat-tab-link disabled>Disabled Link</a>
  </nav>
  <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
  
  <button mat-raised-button class="example-action-button" (click)="toggleBackground()">
    Toggle background
  </button>
  <button mat-raised-button class="example-action-button" (click)="addLink()">
    Add link
    </button>`,
    BasicUseOfTabNavBarTS:
    `import {ThemePalette} from '@angular/material/core';
    
    links = ['First', 'Second', 'Third'];
    activeLink = this.links[0];
    background: ThemePalette = undefined;
  
    toggleBackground() {
      this.background = this.background ? undefined : 'primary';
    }
  
    addLink() {
      this.links.push('Link $ {this.links.length + 1}');
    }`,
}