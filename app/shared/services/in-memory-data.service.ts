import { wineSectionRouting } from './../../wine/wine-section.routes';

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let wines = [
      {id: 1, name: 'Chateau Latour', country: 'France', region: 'Bordeaux', colour: 'Red', vintage: 1995,
      img:'http://www.oenoselection.com/wp-content/uploads/2015/01/chateau-latour-grand-cru-classe.png', shortDesc: 'Medoc first growth from the village of Pauillac.', tastingNotes:[
        {id: 1, wineId: 1, notes: 'Tasting note text',score: 8, dateAdded: '2012-06-09'},
        {id: 2, wineId: 1, notes: 'Very nice wine, plenty of years ahead of it.',score: 8.5, dateAdded: '2014-02-20'},
        {id: 3, wineId: 1, notes: 'Exercitation aliqua cillum Lorem elit adipisicing fugiat est exercitation dolor.',score: 9, dateAdded: '2012-06-09'},
        {id: 4, wineId: 1, notes: 'Nostrud anim nisi incididunt consectetur deserunt adipisicing.',score: 10, dateAdded: '2012-06-09'}
      ]},
      {id: 2, name: 'Puligny Montrachet', country: 'France', region: 'Burgundy', colour: 'White', vintage: 2010,
      img:'http://www.chateau-meursault.com/wp-content/uploads/2015/10/blanc_puligny-montrachet_champ_canet_premier_cru.png', shortDesc: 'One of the top vineyards in Burgundy for white wine.', tastingNotes:[

      ]},
            {id: 3, name: 'Chateau Margaux', country: 'France', region: 'Bordeaux', colour: 'Red', vintage: 1982,
      img:'http://www.shopforwine.net.au/images/wines/1597/1392970146_1370931927_Ch%C3%83%C2%A2teau_Margaux.png', shortDesc: 'Medoc first growth based in Margaux towards the south of Bordeaux.', tastingNotes: [

      ]}
    ];

    let countries = [
        {id:1, name: 'France'},
        {id:2, name: 'Spain'},
        {id:3, name: 'USA'},
        {id:4, name: 'Italy' }
    ];

    let regions = [
        {id: 1, countryId: 1, name: 'Bordeaux'},
        {id: 2, countryId: 1, name: 'Burgundy'},
        {id: 3, countryId: 1, name: 'Loire Valley'},
        {id: 4, countryId: 2, name: 'Rioja'},
        {id: 5, countryId: 3, name: 'California'}
    ];

    return {wines, countries, regions};
  }
}

