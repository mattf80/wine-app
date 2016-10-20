import { Typeahead } from './../ng2-typeahead';
import { CountryService } from './../../shared/services/country.service';
import { Region } from './../../shared/models/region.model';
import { Country } from './../../shared/models/country.model';
import { WineService } from './../../shared/services/wine.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from './../../shared/models/wine.model';


@Component({
    moduleId: module.id,
    selector: 'wine-form',
    templateUrl: 'wine-form.component.html',
    styleUrls: ['wine-form.component.css']
})
export class WineFormComponent implements OnInit {

    colours: string[];
    countries: Country[];
    regions: Region[];

    //testing only
    wines: Wine[];

    newWine: Wine = new Wine(0, '', '', '', '', 0, '', '');
    active: boolean = true;

    constructor(private _wineService: WineService, private _countryService: CountryService) { }

    ngOnInit() {
        this.getColours();
        this.getCountries();
    }

    onCountryChange(countryId: number) {
        this.getRegions(countryId);
    }

    //LOADING REFERENCE DATA FOR THE FORM

    getColours() {
        this._wineService.getColours().then(colours => this.colours = colours);
    }

    getCountries() {
        this._countryService.getCountries().then(countries => this.countries = countries);
    }

    getRegions(countryId: number) {
        this._countryService.getRegions().then(
            regions => this.regions = regions.filter((item) => item.countryId == countryId)
        );
    }

    //END OF REFERENCE DATA CALLS

    onSubmit() {
        console.log(this.newWine);

        this._wineService.create(this.newWine)
            .then(wine => {
                this.newWine = new Wine(0, '', '', '', '', 0, '', '');
                this.active = false;
                setTimeout(() => this.active = true, 0)
            });
    }

    get diagnostic() { return JSON.stringify(this.newWine); }
}