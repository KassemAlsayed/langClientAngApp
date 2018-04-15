import { Component, OnInit } from '@angular/core';

import { Lang }        from '../lang-service/lang';
import { LangService } from '../lang-service/lang.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  languages: Lang[] = [];

  constructor(private langService: LangService) { }

  ngOnInit(): void {
    this.langService.getLanguages()
      .then(languages => this.languages = languages.slice(0, 4));
  }
}
