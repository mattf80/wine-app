
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let wines = [
      {id: 1, name: 'Chateau Latour', country: 'France', region: 'Bordeaux', colour: 'Red', vintage: 1995,
      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/ChateauLatour03.jpg/100px-ChateauLatour03.jpg', shortDesc: 'Not bad for French plonk', tastingNotes:[
        {id: 1, wineId: 1, notes: 'Tasting note text',score: 8, dateAdded: '2012-06-09'}
      ]},
      {id: 2, name: 'Puligny Montrachet', country: 'France', region: 'Burgundy', colour: 'White', vintage: 2010,
      img:'', shortDesc: 'Nice white wine', tastingNotes:[

      ]},
            {id: 1, name: 'Chateau Margaux', country: 'France', region: 'Bordeaux', colour: 'Red', vintage: 1982,
      img:'', shortDesc: 'Past its best but fairly pleasant.', tastingNotes: [

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

