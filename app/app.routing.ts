import { ModuleWithProviders } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);