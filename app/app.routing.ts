import { ModuleWithProviders } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WineListComponent } from './wine/wine-list.component';
import { WineDetailComponent } from './wine/wine-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes, } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'wines', component: WineListComponent},
    { path: 'wines/:slug', component: WineDetailComponent},
    { path: '**', component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);