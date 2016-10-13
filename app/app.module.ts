import { appRouting } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, appRouting],
  declarations: [AppComponent, HomeComponent, ContactComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
