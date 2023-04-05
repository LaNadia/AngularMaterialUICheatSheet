import { Component } from '@angular/core';
import { badgeData } from './badgeData';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  notifications = 3;

  badge: string = badgeData.badge;

  badgeWithColors: string = badgeData.badgeWithColors;

  badgeSizes: string = badgeData.badgeSizes;


  badgePosition: string = badgeData.badgePosition;


  badgeBindedToValue: string = badgeData.badgeBindedToValue;
}
