import { Wine } from './../models/wine.model';
import { Injectable } from '@angular/core';

const winePromise: Promise<Wine[]> = Promise.resolve([
    new Wine(1, "Chateau Latour", "France", "Red", 1995,  'http://www.grandcrustore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1010249b_chateau_latour.jpg'),
    new Wine(1, "Some Rioja", "Spain", "Red", 1982, 'http://www.l-limports.com/content/uploads/images/Bottle%20Shots/Bouteille%20Ch%C3%A2teau%20Haut-Brion%202009%20300%20dpi.jpg'),
    new Wine(1, "Ramey Russian River Valley Chardonnay", "USA", "White", 2005,'http://www.glengarrywines.co.nz/images/v9/bottles/41966.png'),
])

const coloursPromise: Promise<string[]> = Promise.resolve([
    'Red', 'White', 'Rose'
])

@Injectable()
export class WineService {

    //get all Wines
    getWines(){
        return winePromise;
    }

    //get specific wine
    getWine(slug: string){
        return winePromise.then(wines => wines.find(wine => wine.slug === slug));
        // let wine = winePromise.then(wines => {
        //     return wines.find(wine =>{
        //         return wine.slug === slug;
        //     });
        // });

        // return wine;

    }

    wineSearch(country: string, colour: string){
        return winePromise.then(wines => wines.filter(wine => wine.country === country && wine.colour === colour));
    }

    //get colours
    getColours(){
        return coloursPromise;
    }
}