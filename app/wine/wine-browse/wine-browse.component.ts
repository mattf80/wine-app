import { WineService } from './../../shared/services/wine.service';
import { CountryService } from './../../shared/services/country.service';
import { Region } from './../../shared/models/region.model';
import { Country } from './../../shared/models/country.model';
import { ReactiveFormsModule } from '@angular/forms';
import { Wine } from './../../shared/models/wine.model';
import { WineSearchService } from './../../shared/services/wine-search.service';
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Jsonp } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'wine-browse',
    templateUrl: 'wine-browse.component.html'
})
export class WineBrowseComponent implements OnInit {

    countries: Country[];
    colours: string[];
    searchCountry: string;
    searchTerms: string[];
    
    results: Wine[];

    constructor(private _countryService: CountryService, private _wineService: WineService) { }

    ngOnInit() { 
        this.getCountries();   
        this.getColours();     
    }

    getCountries(){
    this._countryService.getCountries().then(countries => this.countries = countries);
    }

     getColours() {
        this._wineService.getColours().then(colours => this.colours = colours);
    }

    search(obj: any){
        this.results = new Array<Wine>();
        this._wineService.wineSearch(obj).then(wines => this.results = wines);
        //console.log(this.results);
    }


}