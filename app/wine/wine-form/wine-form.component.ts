import { WineService } from './../../shared/services/wine.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from './../../shared/models/wine.model';

@Component({
    moduleId: module.id,
    //selector: 'wine-form',
    templateUrl: 'wine-form.component.html',
    styleUrls: ['wine-form.component.css']
})
export class WineFormComponent implements OnInit {

    colours:string[];
    newWine: Wine = new Wine();

    constructor(private _service: WineService) { }

    ngOnInit() { 
        this._service.getColours().then(colours => this.colours = colours);
    }

    onSubmit(){
        console.log(this.newWine);
    }
}