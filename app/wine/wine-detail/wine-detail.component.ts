import { Wine } from './../../shared/models/wine.model';
import { WineService } from './../../shared/services/wine.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: './../../app/wine/wine-detail/wine-detail.component.html',
    styleUrls: ['./../../app/wine/wine-detail/wine-detail.component.css']
})

export class WineDetailComponent implements OnInit {

    wine: Wine;

    constructor(
        private route: ActivatedRoute,
        private service: WineService,
        private router: Router,
        private location: Location) { };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.service.getWine(id)
                .then(wine => this.wine = wine);
        });
    }

    goBack(): void {
        this.location.back();
    }
}