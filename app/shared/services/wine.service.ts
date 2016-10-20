import { InMemoryDataService } from './in-memory-data.service';
import { HttpModule, Http, Headers } from '@angular/http';
import { WINES } from './mock-data';
import { Wine } from './../models/wine.model';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/toPromise';

const coloursPromise: Promise<string[]> = Promise.resolve([
    'Red', 'White', 'Rose'
])

@Injectable()
export class WineService {

    private wineUrl = 'app/wines';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) { }

    //get all Wines
    getWines(): Promise<Wine[]> {
        return this._http.get(this.wineUrl)
            .toPromise()
            
            .then(response => response.json().data as Wine[])
            .catch(this.handleError);
    }


    //get specific wine
    getWine(id: number): Promise<Wine> {
        return this.getWines()
            .then(wines => wines.find(wine => wine.id === id));

       // return Promise.resolve(WINES).then(wines => wines.find(wine => wine.slug === slug));
    }

    wineSearch(country: string, colour: string) {
        return Promise.resolve(WINES).then(wines => wines.filter(wine => wine.country === country && wine.colour === colour));
    }

    //get colours
    getColours() {
        return coloursPromise;
    }

    create(wine: Wine): Promise<Wine> {
        return this._http.post(this.wineUrl, JSON.stringify(wine), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}