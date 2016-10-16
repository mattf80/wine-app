import { Wine } from './../shared/models/wine.model';
import { WineService } from './../shared/services/wine.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './../../app/wine/wine-detail.component.html',
    styleUrls: ['./../../app/wine/wine-detail.component.css']
})

export class WineDetailComponent implements OnInit {
    
    wine: Wine;

    constructor(
        private _route: ActivatedRoute, 
        private _service: WineService,
        private _router: Router){};
    
    ngOnInit() {
        //grab the slug parameter
        let slug = this._route.snapshot.params['slug'];
        console.log(slug);

        this._service.getWine(slug).then(wine => this.wine = wine);
    }

    goBack(){
        this._router.navigate(['/wines']);
    }
}