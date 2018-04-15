import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Lang } from './lang';
import * as data from '../app/app.config';

@Injectable()
export class LangService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private languagesUrl: string;

  constructor(private http: Http) { 
    
    if (this.isPordMode()){
      this.languagesUrl = 'http://127.0.0.1:8080/languages'; 
    } else {
       this.languagesUrl = 'api/languages';  // URL to web api
    }
  }

  ///////////////////////
  getLanguages(): Promise<Lang[]> {
    return this.http.get(this.languagesUrl)
               .toPromise()
               .then(response => this.extractRespAsJason(response))
               .catch(this.handleError);
  }

  getLang(id: number): Promise<Lang> {
    const url = `${this.languagesUrl}/${id}`;

    //let langData = this.http.get(url).toPromise().then(response => console.debug('kass response', response));
    return this.http.get(url)
      .toPromise()
      .then(response => this.extractRespAsJason(response) )
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.languagesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Lang> {
    return this.http
      .post(this.languagesUrl, 
        JSON.stringify({name: name, comment: 'no comment', icon:'/app/lang-service/icons/notprovided.jpg'}), 
        {headers: this.headers})
      .toPromise()
      .then(res => this.extractRespAsJason(res))
      .catch(this.handleError);
  }

  update(lang: Lang): Promise<Lang> {
    let newHeaders = new Headers([{'Content-Type': 'application/json'},
    {'Accept': '*/*'}]);

    let url:string = `${this.languagesUrl}/${lang.id}`; //kass - need this in demo mode
    if (this.isPordMode()){
      url = `${this.languagesUrl}`;
    }
    return this.http
      .put(url, JSON.stringify(lang), {headers: this.headers})
      .toPromise()
      .then(() => lang)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  ///////// utils ///////////
    /**
   * util method to get the result as json array. sometime the
   * respense contains 'data' and sometimes it does not
   * @param response 
   */
  extractRespAsJason(response: any){
    if (this.isPordMode()) {
        return response.json();
      } else {
        return response.json().data;
      } 
  }

  isPordMode(){
    return (data.default.isProdMode == true);
  }
}

