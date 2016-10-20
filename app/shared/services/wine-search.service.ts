import { Wine } from './../models/wine.model';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class WineSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Wine[]> {
    
    return this.http
               .get(`app/wines/?name=${term}`)
               .map((r: Response) => r.json().data as Wine[]);
  }
}
