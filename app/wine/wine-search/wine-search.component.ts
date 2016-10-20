import { ReactiveFormsModule } from '@angular/forms';
import { Wine } from './../../shared/models/wine.model';
import { WineSearchService } from './../../shared/services/wine-search.service';
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Jsonp } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'wine-search',
  templateUrl: 'wine-search.component.html',
  styleUrls: [ 'wine-search.component.css' ],
  providers: [WineSearchService]
})
export class WineSearchComponent implements OnInit {

  wines: Observable<Wine[]>;
  searchTerms = new Subject<string>();

  constructor(
    private wineSearchService: WineSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.wines = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.wineSearchService.search(term)        
        // or the observable of empty winees if no search term
        : Observable.of<Wine[]>([]))
        
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Wine[]>([]);
      });

  }
  gotoDetail(wine: Wine): void {
    let link = ['/wines/detail', wine.id];
    this.router.navigate(link);
  }
}
