import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { AboutComponent } from './about/about.component';
import { WineSearchComponent } from './wine/wine-search/wine-search.component';
import { WineFormComponent } from './wine/wine-form/wine-form.component';
import { HomeComponent } from './home/home.component';

// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'addwine', component: WineFormComponent },
    { path: 'search', component: WineSearchComponent},
    { path: 'list', component: WineListComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}