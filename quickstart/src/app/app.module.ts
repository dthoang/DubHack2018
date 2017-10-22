import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


// Imports for loading & configuring the in-memory web api

import { AppComponent }         from './app.component';
import { Landing }  from './views/landing.page';

import { PublicService }  from './service/public.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    Landing
  ],
  providers:[PublicService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
