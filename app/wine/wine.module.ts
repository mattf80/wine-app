import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineSectionRoutingModule } from './wine-section-routing.module';

import { WineListComponent } from './../wine/wine-list/wine-list.component';
import { WineDetailComponent } from './../wine/wine-detail/wine-detail.component';
import { Wine } from './../shared/models/wine.model';
import { WineService } from './../shared/services/wine.service';
import { WineSearchComponent } from './wine-search/wine-search.component';
import { WineSectionComponent } from './wine-section.component';
import { WineFormComponent } from './wine-form/wine-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WineSectionRoutingModule
    ],
    declarations: [
        WineListComponent,
        WineDetailComponent,
        WineSectionComponent,
        WineSearchComponent,
        WineFormComponent
    ],
    providers: [
        WineService
    ]
})

export class WineModule {}