import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import {ThemePalette} from '@angular/material/core';
import { tabsData } from './tabsData';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

    TabGroupWithAlignedLabelsHTML: string = tabsData.TabGroupWithAlignedLabelsHTML;
    TabGroupAnimationsHTML: string = tabsData.TabGroupAnimationsHTML;
    TabGroupWithAsynchronouslyLoadingTabContentsHTML: string = tabsData.TabGroupWithAsynchronouslyLoadingTabContentsHTML;
    TabGroupWithAsynchronouslyLoadingTabContentsTS: string = tabsData.TabGroupWithAsynchronouslyLoadingTabContentsTS;
    BasicUseOfTheTabGroupHTML: string = tabsData.BasicUseOfTheTabGroupHTML;
    UsingTabsWithACustomLabelTemplateHTML: string = tabsData.UsingTabsWithACustomLabelTemplateHTML;
    TabGroupWithDynamicHeightBasedOnTabContentsHTML: string = tabsData.TabGroupWithDynamicHeightBasedOnTabContentsHTML;
    TabGroupWithDynamicHeightBasedOnTabContentsCSS: string = tabsData.TabGroupWithDynamicHeightBasedOnTabContentsCSS;
    TabGroupWithDynamicallyChangingTabsHTML: string = tabsData.TabGroupWithDynamicallyChangingTabsHTML;
    TabGroupWithDynamicallyChangingTabsTS: string = tabsData.TabGroupWithDynamicallyChangingTabsTS;
    TabGroupWithDynamicallyChangingTabsCSS: string = tabsData.TabGroupWithDynamicallyChangingTabsCSS;
    TabGroupWithTheHeadersOnTheBottomHTML: string = tabsData.TabGroupWithTheHeadersOnTheBottomHTML;
    TabGroupWithInkBarFitToContentHTML: string = tabsData.TabGroupWithInkBarFitToContentHTML;
    TabGroupWithInvertedTabsHTML: string = tabsData.TabGroupWithAlignedLabelsHTML;
    TabGroupTabContentIsLoadedLazilyHTML: string = tabsData.TabGroupTabContentIsLoadedLazilyHTML;
    TabGroupTabContentIsLoadedLazilyTS: string = tabsData.TabGroupTabContentIsLoadedLazilyTS;
    TabGroupWithPaginatedTabsHTML: string = tabsData.TabGroupWithPaginatedTabsHTML;
    TabGroupWithPaginatedTabsTS: string = tabsData.TabGroupWithPaginatedTabsTS;
    TabGroupKeepsContentInsideDOMWhenOffscreenHTML: string = tabsData.TabGroupKeepsContentInsideDOMWhenOffscreenHTML;
    TabGroupWithStretchedLabelsHTML: string = tabsData.TabGroupWithStretchedLabelsHTML;
    CustomizingThemeOptionsOnTabGroupHTML: string = tabsData.CustomizingThemeOptionsOnTabGroupHTML;
    BasicUseOfTabNavBarHTML: string = tabsData.BasicUseOfTabNavBarHTML;
    BasicUseOfTabNavBarTS: string = tabsData.BasicUseOfTabNavBarTS;

  //Tab group with asynchronously loading tab contents
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

  //Tab group with dynamically changing tabs

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  //Tab group where the tab content is loaded lazily (when activated)
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  //Tab group with paginated tabs
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);

  //Basic use of the tab nav bar

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
