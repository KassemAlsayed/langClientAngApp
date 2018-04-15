import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="blueBorder">
      <!--   <h1>{{title}}</h1> -->
      <div class="yellowBorder">
          <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/languages" routerLinkActive="active">Languages</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/help" routerLinkActive="active">Help</a>
          </nav>
        </div>
        <!-- this is where the sub comps go -->
      <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Languages';
}
