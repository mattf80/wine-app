import { Wine } from './../../shared/models/wine.model';
import { Component, OnInit } from '@angular/core';
import { WineService } from './../../shared/services/wine.service';
import { WineSearch } from './../../shared/models/search.model';

@Component({
    moduleId: module.id,
    selector: 'wine-search',
    templateUrl: 'wine-search.component.html',
    styleUrls:['wine-search.component.css']
})
export class WineSearchComponent implements OnInit {
    
    colours:string[];
    model = new WineSearch('France', 'Red');
    results: Wine[] = new Array<Wine>();

    constructor(private _service: WineService) { }

    ngOnInit() { 
        this._service.getColours().then(colours => this.colours = colours);
    }

    search() {
        this._service.getWines().then(wines => this.results = wines);
        console.log(this.results);
       // this._service.wineSearch(this.model.country, this.model.colour)
       //     .then(results => this.results = results);
        
    }

    //For testing only
    get diagnostic() { return JSON.stringify(this.model); }
}