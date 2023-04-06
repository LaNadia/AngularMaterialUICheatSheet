import { Component } from '@angular/core';
import { cardData } from './cardData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  BasicCard: string = cardData.BasicCard;
  CardSsubTitle: string = cardData.CardSsubTitle;
  CardMediaSizeHTML: string = cardData.CardMediaSizeHTML;
  CardMediaSizeCSS: string = cardData.CardMediaSizeCSS;
  CardFooter: string = cardData.CardFooter;
  CardMultipleSectionHTML: string = cardData.CardMultipleSectionHTML;
  CardMultipleSectionsCSS: string = cardData. CardMultipleSectionsCSS;
  CardActionsAlignmentOption: string = cardData.CardActionsAlignmentOption;
  

  longText: string = cardData.longText;
}
