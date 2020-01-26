import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule, MatProgressBarModule, MatPaginatorModule, MatIconModule, 
        MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatRadioModule, MatSelectModule} from '@angular/material';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    AboutComponent
  ],
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule, 
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    MatInputModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule, 
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
