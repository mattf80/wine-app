import { Wine } from './../../shared/models/wine.model';
import { WineService } from './../../shared/services/wine.service';

import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'wine-list',
    templateUrl: 'wine-list.component.html'
    //styleUrls: ['wine-list.component.css']
})
export class WineListComponent implements OnInit {

    wines: Wine[]

    constructor(private _service: WineService) { }

    ngOnInit() { 
        this._service.getWines().then(wines => this.wines = wines);
    }
}