import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExportModule } from './material-export/material-export.module';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { ButtonsModule } from './components/buttons/buttons.module';
import { ChipsModule } from './components/chips/chips.module';
import { TableModule } from './components/table/table.module';
import { DialogModule } from './components/dialog/dialog.module';


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialExportModule,
        CodemirrorModule,
        MainModule,
        ChipsModule,
        ButtonsModule,
        TableModule,
        DialogModule,
        
    ]
})
export class AppModule { }
