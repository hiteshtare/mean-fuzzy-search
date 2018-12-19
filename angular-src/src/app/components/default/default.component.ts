import { Component, OnInit } from '@angular/core';
import { FuzzyApiService } from 'src/app/shared/services/fuzzy-api.service';
import { CustomToastService } from 'src/app/shared/services/custom-toast.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  results;
  txtSearch = '';
  txtNgramSize = '2';
  txtAreaJSON = '';

  selectedPhoneticValue: string[] = ['levenshtein'];
  selectedCustomJsonValue = 'false';

  constructor(private fuzzyApiService: FuzzyApiService, private customToastService: CustomToastService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.loadDefaultResults();
  }

  onTxtSearchChange(value) {
    this.loadDefaultResults();
  }

  get txtAreaJSONValue() {
    return JSON.stringify(this.txtAreaJSON, null, 2);
  }

  set txtAreaJSONValue(v) {
    try {
      this.txtAreaJSON = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }

  loadDefaultResults() {
    const value = this.selectedPhoneticValue[0] === '' ? 'fuzzball' : this.selectedPhoneticValue;

    const options = {
      'searchStr': this.txtSearch,
      'ngramSize': this.txtNgramSize,
      'name': value,
      'isCustomJson': this.selectedCustomJsonValue,
      'examples': this.txtAreaJSON
    };

    this.fuzzyApiService.getDefaultResults(options).subscribe((data) => {
      if (data['success'] === true) {
        this.customToastService.toastMessage('success', 'Custom Search Complete', data['message']);
        this.results = data['payload'];
      }
    });
  }
}
