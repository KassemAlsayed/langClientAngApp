import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Lang }           from '../lang-service/lang';

@Injectable()
export class LangSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Lang[]> {
    return this.http
               .get(`app/languages/?name=${term}`)
               .map(response => response.json().data as Lang[]);
  }
}
