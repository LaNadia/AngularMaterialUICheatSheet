import { Component } from '@angular/core';
import { listData } from './listData';


export interface Section {
  name: string;
  updated: Date;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  BasicListHTML: string = listData.BasicListHTML;
  ListWithSectionsHTML: string = listData.ListWithSectionsHTML;
  ListWithSectionsTS: string = listData.ListWithSectionsTS;
  ListWithSelectionHTML: string = listData.ListWithSelectionHTML;
  ListWithSelectionTS: string = listData.ListWithSelectionTS;
  ListWithSingleSelectionHTML: string = listData.ListWithSingleSelectionHTML;
  ListWithSingleSelectionTS: string = listData.ListWithSingleSelectionTS;
  ListVariantsHTML: string = listData.ListVariantsHTML;


  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  
}
