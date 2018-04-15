import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryLanguageDataService implements InMemoryDbService {
  createDb() {
    let languages = [
      {id: 11, name: 'Java', comment: 'Most popular...', icon: '/app/lang-service/icons/java.png'},
      {id: 12, name: 'C++', comment: 'void ** (*d) (int &, char **(*)(char *, char **))...', icon: '/app/lang-service/icons/c-plus.jpg'},
      {id: 13, name: 'Javascript', comment: 'Any thing goes...', icon: '/app/lang-service/icons/js.png'},
      {id: 14, name: 'SmallTalk', comment: 'Purest OO...', icon: '/app/lang-service/icons/smallalk.jpg'},
      {id: 15, name: 'Prolog', comment: 'The logical one...', icon: '/app/lang-service/icons/prolog.jpg'},
      {id: 20, name: 'AtScript', comment: 'Another Google failure...', icon: '/app/lang-service/icons/dart.png'}
    ];
    return {languages}; // this is addressable by api/languages
  }
  
}
