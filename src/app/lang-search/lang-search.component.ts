import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { LangSearchService } from './lang-search.service';
import { Lang } from '../lang-service/lang';

@Component({
  selector: 'lang-search',
  templateUrl: './lang-search.component.html',
  styleUrls: [ './lang-search.component.css' ],
  providers: [LangSearchService]
})
export class LangSearchComponent implements OnInit {
  languages: Observable<Lang[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private langSearchService: LangSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.languages = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.langSearchService.search(term)
        // or the observable of empty languages if there was no search term
        : Observable.of<Lang[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Lang[]>([]);
      });
  }

  gotoDetail(lang: Lang): void {
    let link = ['/detail', lang.id];
    this.router.navigate(link);
  }
}
