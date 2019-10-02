import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { PeoplesComponent } from './peoples/peoples.component';
import {MatMenuModule, MatMenu} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PeopleCardComponent } from './peoples/people-card/people-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent,
    PeopleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
