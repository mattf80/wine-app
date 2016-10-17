import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { WineModule } from './wine/wine.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [BrowserModule, FormsModule, WineModule, AppRoutingModule],
  declarations: [
    AppComponent, 
    HomeComponent, 
    ContactComponent, 
    AboutComponent,
    NotFoundComponent],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
