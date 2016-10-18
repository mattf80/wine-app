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

    colours:string[];
    newWine: Wine = new Wine(0,'','','',0,'','');
    active: boolean = true;

    constructor(private _service: WineService) { }

    ngOnInit() { 
        this._service.getColours().then(colours => this.colours = colours);
    }

    onSubmit(){
        console.log(this.newWine);

        this.newWine = new Wine(0,'','','',0,'','');
        this.active = false;
        setTimeout(() => this.active = true, 0)
    }

    get diagnostic() { return JSON.stringify(this.newWine); }
}