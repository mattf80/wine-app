import { ModuleWithProviders } from '@angular/core';
import { WineDetailComponent } from './wine-detail.component';
import { WineListComponent } from './wine-list.component';
import { Routes, RouterModule } from '@angular/router';
import { WineSectionComponent } from './wine-section.component';

const wineRoutes: Routes = [

    { 
        path: '',
        component: WineSectionComponent,
        children: 
     [
         { path: '', component: WineListComponent },
         { path: ':slug', component: WineDetailComponent }
     ]
    }
];

export const wineRouting: ModuleWithProviders = RouterModule.forChild(wineRoutes);