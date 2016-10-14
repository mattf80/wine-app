import { WineService } from './shared/services/wine.service';
import { appRouting } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WineListComponent } from './wine/wine-list.component';
import { WineDetailComponent } from './wine/wine-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [BrowserModule, FormsModule, appRouting],
  declarations: [
    AppComponent, 
    HomeComponent, 
    ContactComponent, 
    AboutComponent,
    WineListComponent, 
    WineDetailComponent,
    NotFoundComponent],
  providers: [
    WineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
