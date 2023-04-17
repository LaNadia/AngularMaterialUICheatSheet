export const sidenavData: any  ={

    AutosizeSidenavHTML:
    `<mat-drawer-container class="example-container" autosize>
    <mat-drawer #drawer class="example-sidenav" mode="side">
      <p>Auto-resizing sidenav</p>
      <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
      <button (click)="showFiller = !showFiller" mat-raised-button>
        Toggle extra text
      </button>
    </mat-drawer>
  
    <div class="example-sidenav-content">
      <button type="button" mat-button (click)="drawer.toggle()">
        Toggle sidenav
      </button>
    </div>
  
    </mat-drawer-container>`,
    AutosizeSidenavTS:
    ` showFiller = false;`,
    AutosizeSidenavCSS:
    `.example-container {
        width: 500px;
        height: 300px;
        border: 1px solid rgba(0, 0, 0, 0.5);
      }
      
      .example-sidenav-content {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      
      .example-sidenav {
        padding: 20px;
      }`,

    DrawerExplicitBackdropSettingHTML:
    `<mat-drawer-container class="example-container" [hasBackdrop]="hasBackdrop.value">
    <mat-drawer #drawer [mode]="mode.value">I'm a drawer</mat-drawer>
    <mat-drawer-content>
      <mat-form-field appearance="fill">
        <mat-label>Sidenav mode</mat-label>
        <mat-select #mode value="side">
          <mat-option value="side">Side</mat-option>
          <mat-option value="over">Over</mat-option>
          <mat-option value="push">Push</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Has backdrop</mat-label>
        <mat-select #hasBackdrop>
          <mat-option>Unset</mat-option>
          <mat-option [value]="true">True</mat-option>
          <mat-option [value]="false">False</mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-raised-button (click)="drawer.toggle()">Toggle drawer</button>
    </mat-drawer-content>
    </mat-drawer-container>`,
    DrawerExplicitBackdropSettingCSS:
    `.example-container {
        width: 400px;
        height: 200px;
        margin: 12px;
        border: 1px solid #555;
      }
      
      mat-drawer-content {
        padding: 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }`,

}