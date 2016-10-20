import { CountryService } from './../shared/services/country.service';
import { Typeahead } from './ng2-typeahead';
import { wineSectionRouting } from './wine-section.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './../shared/services/in-memory-data.service';

//import './../rxjs-extensions';


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
        ReactiveFormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        wineSectionRouting
    ],
    declarations: [
        WineListComponent,
        WineDetailComponent,
        WineSectionComponent,
        WineSearchComponent,
        WineFormComponent,
        Typeahead
    ],
    providers: [
        WineService,
        CountryService
    ]
})

export class WineModule {

}