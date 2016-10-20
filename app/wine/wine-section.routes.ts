import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineSectionComponent } from './wine-section.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    { path: 'wines', component: WineSectionComponent},
    { path: 'wines/list', component: WineListComponent },
    { path: 'wines/add', component: WineFormComponent },
    { path: 'wines/detail/:id', component: WineDetailComponent}
];

export const wineSectionRouting: ModuleWithProviders = RouterModule.forChild(routes);