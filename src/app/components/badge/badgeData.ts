export const badgeData: any  ={

    badge: 
    `<span matBadge="5">notification1</span>
    <span matBadge="5" matBadgeOverlap="false">notification</span>
    <span matBadge="5"><mat-icon>mail_outline</mat-icon></span>`,

    badgeWithColors: 
    `<span matBadge="5" matBadgeColor="primary">notification</span>
    <span matBadge="5" matBadgeColor="accent">notification</span>
    <span matBadge="5" matBadgeColor="warn">notification</span>`,

    badgeSizes: 
    `<span matBadge="5" matBadgeSize="small">notification small</span>
    <span matBadge="5" matBadgeSize="medium">notification medium</span>
    <span matBadge="5" matBadgeSize="large">notification large</span>`,

    badgePosition: 
    `<span matBadge="5" matBadgePosition="below before">notification</span>
    <span matBadge="5" matBadgePosition="below after">notification</span>
    <span matBadge="5" matBadgePosition="above before">notification</span>`,

    badgeBindedToValue: 
    `<span [matBadge]="notifications">notification</span>
    <span [matBadge]="notifications" [matBadgeHidden]="notifications === 0">notification</span>`

}