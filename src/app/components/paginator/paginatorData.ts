export const paginatorData: any  ={

    Paginator:
    `<mat-paginator [length]="100"
    [pageSize]="10"
    [pageSizeOptions]="[5, 10, 25, 100]"
    aria-label="Select page">
    </mat-paginator>`,

    ConfigurablePaginatorHTML:
    `<div class="demo-options">
    <mat-form-field>
      <mat-label>Length</mat-label>
      <input matInput placeholder="Length" type="number" [(ngModel)]="length">
    </mat-form-field>
  
    <mat-form-field>
      <mat-label>Page Size</mat-label>
      <input matInput placeholder="Page Size" type="number" [(ngModel)]="pageSize">
    </mat-form-field>
  
    <mat-form-field>
      <mat-label>Page Index</mat-label>
      <input matInput placeholder="Page Index" type="number" [(ngModel)]="pageIndex">
    </mat-form-field>
  
    <mat-form-field>
      <mat-label>Page Size Options</mat-label>
      <input matInput [ngModel]="pageSizeOptions" (ngModelChange)="setPageSizeOptions($event)"
             [ngModelOptions]="{updateOn: 'blur'}" placeholder="Ex. 10,25,50">
        </mat-form-field>
    
        <div class="demo-toggles">
        <mat-slide-toggle [(ngModel)]="hidePageSize">Hide page size</mat-slide-toggle>
        <mat-slide-toggle [(ngModel)]="showPageSizeOptions">Show multiple page size options</mat-slide-toggle>
        <mat-slide-toggle [(ngModel)]="showFirstLastButtons">Show first/last buttons</mat-slide-toggle>
        <mat-slide-toggle [(ngModel)]="disabled">Disabled</mat-slide-toggle>
        </div>
    </div>
    
    <mat-paginator #paginator
                    class="demo-paginator"
                    (page)="handlePageEvent($event)"
                    [length]="length"
                    [pageSize]="pageSize"
                    [disabled]="disabled"
                    [showFirstLastButtons]="showFirstLastButtons"
                    [pageSizeOptions]="showPageSizeOptions ? pageSizeOptions : []"
                    [hidePageSize]="hidePageSize"
                    [pageIndex]="pageIndex"
                    aria-label="Select page">
    </mat-paginator>
    
    <div class="demo-data">
        <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>
        <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>
    </div>`,

    ConfigurablePaginatorTS:
    ` length = 50;
    pageSize = 10;
    pageIndex = 0;
    pageSizeOptions = [5, 10, 25];
  
    hidePageSize = false;
    showPageSizeOptions = true;
    showFirstLastButtons = true;
    disabled = false;
  
    pageEvent: PageEvent;
  
    handlePageEvent(e: PageEvent) {
      this.pageEvent = e;
      this.length = e.length;
      this.pageSize = e.pageSize;
      this.pageIndex = e.pageIndex;
    }
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      if (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      }
    }`,

}