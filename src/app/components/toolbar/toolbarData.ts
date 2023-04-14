export const toolbarData: any = {

    BasicToolbarHTML:
    `<mat-toolbar>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    <span>My App</span>
    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
      <mat-icon>favorite</mat-icon>
    </button>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
      <mat-icon>share</mat-icon>
    </button>
    </mat-toolbar>`,

    MultiRowToolbarHTML:
    `<mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>Custom Toolbar</span>
    </mat-toolbar-row>
  
    <mat-toolbar-row>
      <span>Second Line</span>
      <span class="example-spacer"></span>
      <mat-icon class="example-icon" aria-hidden="false" aria-label="Example user verified icon">verified_user</mat-icon>
    </mat-toolbar-row>
  
    <mat-toolbar-row>
      <span>Third Line</span>
      <span class="example-spacer"></span>
      <mat-icon class="example-icon" aria-hidden="false" aria-label="Example heart icon">favorite</mat-icon>
      <mat-icon class="example-icon" aria-hidden="false" aria-label="Example delete icon">delete</mat-icon>
    </mat-toolbar-row>
    </mat-toolbar>`,

    ToolbarOverviewHTML:
    `<p>
    <mat-toolbar>
      <span>My Application</span>
    </mat-toolbar>
  </p>
  
  <p>
    <mat-toolbar>
     <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    <span>My App</span>
    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
      <mat-icon>favorite</mat-icon>
    </button>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
     <mat-icon>share</mat-icon>
   </button>
  </mat-toolbar>
  </p>
  
  <p>
    <mat-toolbar color="primary">
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="example-spacer"></span>
      <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
        <mat-icon>share</mat-icon>
      </button>
    </mat-toolbar>
  </p>
  
  <p>
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>My App</span>
        <span class="example-spacer"></span>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
          <mat-icon>menu</mat-icon>
        </button>
      </mat-toolbar-row>
  
      <mat-toolbar-row>
        <span>Second Line</span>
        <span class="example-spacer"></span>
        <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
          <mat-icon>share</mat-icon>
        </button>
      </mat-toolbar-row>
    </mat-toolbar>
    </p>`,
}