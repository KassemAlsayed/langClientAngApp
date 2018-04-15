import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Lang }                from '../lang-service/lang';
import { LangService }         from '../lang-service/lang.service';

@Component({
  selector: 'my-languages',
  templateUrl: './languages.component.html',
  styleUrls: [ './languages.component.css' ]
})
export class LanguagesComponent implements OnInit {
  languages: Lang[];
  selectedLang: Lang;

  constructor(
    private langService: LangService,
    private router: Router) { }

  getLanguages(): void {
    this.langService
        .getLanguages()
        .then(languages => this.languages = languages);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.langService.create(name)
      .then(lang => {
        this.languages.push(lang);
        this.selectedLang = null;
      });
  }

  delete(lang: Lang): void {
    this.langService
        .delete(lang.id)
        .then(() => {
          this.languages = this.languages.filter(h => h !== lang);
          if (this.selectedLang === lang) { this.selectedLang = null; }
        });
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  onSelect(lang: Lang): void {
    this.selectedLang = lang;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedLang.id]);
  }
}
