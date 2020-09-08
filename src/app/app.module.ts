import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ApiParams } from './models/ApiParams';
import { PagerComponent } from './pager/pager.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    PagerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [ ApiParams ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
