import { FuzzyApiService } from './shared/services/fuzzy-api.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private fuzzyApiService: FuzzyApiService, private router: Router) {
    this.fuzzyApiService.fuzzyApiUrl = environment.apiUrl;
  }


  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
