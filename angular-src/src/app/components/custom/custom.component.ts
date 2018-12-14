import { Component, OnInit } from '@angular/core';
import { FuzzyApiService } from 'src/app/shared/services/fuzzy-api.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {


  results;
  txtSearch = '';
  txtAreaJSON = '';

  selectedPhoneticValue: string[] = ['levenshtein']; // ['ratio']

  constructor(private fuzzyApiService: FuzzyApiService) { }

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
