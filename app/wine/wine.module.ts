import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineListComponent } from './../wine/wine-list.component';
import { WineDetailComponent } from './../wine/wine-detail.component';

import { Wine } from './../shared/models/wine.model';
import { WineService } from './../shared/services/wine.service';
import { wineRouting } from './wine.routing';
import { WineSearchComponent } from './wine-search.component';
import { WineSectionComponent } from './wine-section.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        wineRouting
    ],
    declarations: [
        WineListComponent,
        WineDetailComponent,
        WineSectionComponent,
        WineSearchComponent
    ],
    providers: [
        WineService
    ]
})

export class WineModule {}