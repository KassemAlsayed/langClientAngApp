import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Lang }        from '../lang-service/lang';
import { LangService } from '../lang-service/lang.service';

@Component({
  selector: 'lang-detail',
  templateUrl: './lang-detail.component.html',
  styleUrls: [ './lang-detail.component.css' ]
})
export class LangDetailComponent implements OnInit {
  lang: Lang;
 
  constructor(
    private langService: LangService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.langService.getLang(+params['id']))
      .subscribe(lang => this.lang = lang);
  }

  save(): void {
    this.langService.update(this.lang)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
