export const cardData: any  = {
    BasicCard:
    `<mat-card>
    <mat-card-content>Simple card</mat-card-content>
    </mat-card>`,
    CardSsubTitle:
    `<mat-card class="example-card">
    <mat-card-header>
      <mat-card-title>Shiba Inu</mat-card-title>
      <mat-card-subtitle>Dog Breed</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <p>Here goes the text, it may be binded</p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button>LIKE</button>
      <button mat-button>SHARE</button>
    </mat-card-actions>
    </mat-card>`,
    CardMediaSizeHTML:
    `<mat-card class="example-card">
    <mat-card-header>
      <mat-card-title-group>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Small</mat-card-subtitle>
        <img mat-card-sm-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" >
      </mat-card-title-group>
        </mat-card-header>
        <mat-card-content>
            <p>Here goes the text, it may be binded</p>
        </mat-card-content>
    </mat-card>`,
    CardFooter:
    ` <mat-card class="example-card">
        <mat-card-header>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        <mat-card-title>Shiba Inu</mat-card-title>
        </mat-card-header>
        <mat-card-content>
        <p>This card has divider and indeterminate progress as footer</p>
        <p>Here goes the text, it may be binded</p>
        <mat-divider></mat-divider>
        </mat-card-content>
        <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
        </mat-card-actions>
        <mat-card-footer>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
        </mat-card-footer>
    </mat-card>`,
    CardMultipleSectionHTML:
    ` <mat-card class="example-card">
        <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
        <mat-card-content>
        <p>
            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.
        </p>
        </mat-card-content>
        <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
        </mat-card-actions>
    </mat-card>`,
    CardActionsAlignmentOption:
    `<mat-card>
        <mat-card-header>
        <mat-card-title>Actions Buttons</mat-card-title>
        <mat-card-subtitle>Start</mat-card-subtitle>
        </mat-card-header>
        <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
        </mat-card-actions>
    </mat-card>
    <br>
    <mat-card>
        <mat-card-header>
        <mat-card-title>Actions Buttons</mat-card-title>
        <mat-card-subtitle>End</mat-card-subtitle>
        </mat-card-header>
        <mat-card-actions align="end">
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
        </mat-card-actions>
    </mat-card>`,


    CardMediaSizeCSS:
    `.example-card {
        max-width: 400px;
        margin-bottom: 8px;
      }`,

      CardMultipleSectionsCSS: 
      `.example-header-image {
        background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
        background-size: cover;
      }`,


    longText : `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`
}