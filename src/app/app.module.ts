import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExportModule } from './material-export/material-export.module';
import { MainComponent } from './main/main.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { MainModule } from './main/main.module';
import { ChipsComponent } from './pages/chips/chips.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExportModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
