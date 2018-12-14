import { FuzzyApiService } from './shared/services/fuzzy-api.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results;
  txtSearch = '';
  txtAreaJSON = '';

  selectedPhoneticValue: string[] = ['levenshtein']; // ['ratio']

  constructor(private fuzzyApiService: FuzzyApiService) {
    this.fuzzyApiService.fuzzyApiUrl = environment.apiUrl;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // this.loadDefaultResults();
    this.loadCustomResults();
  }

  onTxtSearchChange(value) {
    this.loadCustomResults();
  }

  get rapidPageValue() {
    return JSON.stringify(this.txtAreaJSON, null, 2);
  }

  set rapidPageValue(v) {
    try {
      this.txtAreaJSON = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }

  loadDefaultResults() {
    this.fuzzyApiService.getDefaultResults().subscribe((data) => {
      this.results = data['payload'];
    });
  }

  loadCustomResults() {
    const value = this.selectedPhoneticValue[0] === '' ? 'fuzzball' : this.selectedPhoneticValue;

    const options = {
      'searchStr': this.txtSearch,
      'name': value
    };

    this.fuzzyApiService.getCustomResults(options).subscribe((data) => {
      this.results = data['payload'];
    });
  }
}


