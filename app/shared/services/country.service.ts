import { COUNTRIES, REGIONS } from './mock-data';
import { Injectable } from '@angular/core';
import { Region } from './../models/region.model';
import { Country } from './../models/country.model';
import { HttpModule, Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CountryService {

    private countriesUrl = 'app/countries';

    constructor(private _http: Http) { }


    getCountries(): Promise<Country[]> {
        return this._http.get(this.countriesUrl)
            .toPromise()
            .then(response => response.json().data as Country[])
            .catch(this.handleError);
    }

    getRegions(): Promise<Region[]> {
        return this._http.get('app/regions')
            .toPromise()
            .then(response => response.json().data as Region[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}