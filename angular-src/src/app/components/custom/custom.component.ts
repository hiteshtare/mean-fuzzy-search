import { Component, OnInit } from '@angular/core';
import { FuzzyApiService } from 'src/app/shared/services/fuzzy-api.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {


  results;
  txtSearch = '';
  txtAreaJSON = '';
  sampleForm;

  searchAlgorithmList = [
    new Item('FuzzBall - Partial Ratio', 'fuzzball'),
    new Item('Daitch Mokotoff', 'daitchmokotoff'),
    new Item('Soundex', 'soundex'),
    new Item('Soundex', 'doublemetaphone'),
    new Item('Natural Metaphone', 'naturalmetaphone'),
    new Item('Natural Soundex', 'naturalsoundex'),
    new Item('Symlar', 'symlar'),
    new Item('FuzzBall - Levenshtein', 'levenshtein'),
    new Item('Jaro Winkler', 'jarowinkler'),
    new Item('Fuse', 'fuse'),
    new Item('Lunar - Porter Stemmer', 'lunr'),
    new Item('N Gram Fingerprint', 'ngram')
  ];
  searchAlgorithmFormArray;
  langControlMetada: Array<FormControlMetadata> = [];
  selectedAlgorithmCount = 0;
  missingLanguage = false;
  test: any;

  selectedPhoneticValue: string[] = ['levenshtein']; // ['ratio']

  constructor(private fuzzyApiService: FuzzyApiService, private formBuilder: FormBuilder) {
    this.sampleForm = this.formBuilder.group({
      searchAlgorithm: this.formBuilder.array([{}])
    });

    this.populateSearchAlgorithm();
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

  populateSearchAlgorithm() {
    // Get the property
    this.searchAlgorithmFormArray = this.sampleForm.get('searchAlgorithm') as FormArray;
    // Clear
    this.searchAlgorithmFormArray.removeAt(0);

    let p: Item;
    // Loop through the list and create the formarray metadata
    for (p of this.searchAlgorithmList) {

      const control = new FormControlMetadata();
      const group = this.formBuilder.group({});

      // Create the checkbox and other form element metadata
      control.checkboxName = `${Common.CheckboxPrefix}${p.value}`;
      control.checkboxLabel = p.text;
      control.associateControlName = `${Common.OtherPrefix}${p.value}`;
      // control.associateControlLabel = `${p.text} weightage`;
      control.associateControlLabel = `Weightage (0-1)`;
      control.associateControlType = Common.ControlType[Common.ControlType.textbox];

      // Store in array, use by html to loop through
      this.langControlMetada.push(control);

      // Form control
      const checkBoxControl = this.formBuilder.control('');
      const associateControl = this.formBuilder.control({ value: '', disabled: true });

      // Add to form group [key, control]
      group.addControl(`${Common.CheckboxPrefix}${p.value}`, checkBoxControl);
      group.addControl(`${Common.OtherPrefix}${p.value}`, associateControl);

      // Add to form array
      this.searchAlgorithmFormArray.push(group);
    }
  }


  searchAlgorithms(): FormArray {
    return this.sampleForm.get('searchAlgorithm') as FormArray;
  }

  languageSelectionChange(pos: number, cnkName: string, txtName: string) {
    const searchAlgorithm = this.searchAlgorithms();

    const control = searchAlgorithm.controls[pos] as FormGroup;

    if (control.controls[cnkName].value === true) {
      // Checkbox checked
      control.controls[txtName].enable();
      control.controls[txtName].setValidators([Validators.required]);
      control.controls[txtName].updateValueAndValidity();
      this.selectedAlgorithmCount++;
    } else {
      // Unchecked
      control.controls[txtName].setValue('');
      control.controls[txtName].disable();
      control.controls[txtName].clearValidators();
      control.controls[txtName].updateValueAndValidity();
      this.selectedAlgorithmCount--;
    }
  }

  public submit(e: any): void {
    e.preventDefault();

    // Reset
    const selectedLanguageList: Array<Item> = [];
    const searchAlgorithm = this.searchAlgorithms();
    let i: number;
    // Checkbox id
    let languageId;

    for (i = 0; i < searchAlgorithm.controls.length; i++) {

      const control = searchAlgorithm.controls[i] as FormGroup;
      const selectedLanguage = {} as any;

      // tslint:disable-next-line:forin
      for (const k in control.controls) {
        languageId = k.split('_')[1];
        break;
      }

      // Capture the selected checkbox Id and textbox value
      if (control.controls[`${Common.CheckboxPrefix}${languageId}`].value === true) {
        selectedLanguage.value = languageId;
        selectedLanguage.text = control.controls[`${Common.OtherPrefix}${languageId}`].value;
        selectedLanguageList.push(selectedLanguage);
      }
    }

    if (selectedLanguageList.length === 0) {
      this.missingLanguage = true;
    } else {
      // Submit to API
      const formObjectToApi = new FormObjectToApi();

      formObjectToApi.selectedAlgorithms = selectedLanguageList;

      this.missingLanguage = false;
      this.test = formObjectToApi;
    }
  }
}// End of CustomComponent class

class Item {
  constructor(
    public text: string,
    public value: string) { }
}

enum ControlType {
  textbox = 1,
  dropdown = 2,
  radioButtonList = 3
}

class FormControlMetadata {
  public checkboxName: string;
  public checkboxLabel: string;
  public associateControlName: string;
  public associateControlLabel: string;
  public associateControlType: string;
  public associateControlData: Array<Item>;

  constructor() { }
}

class FormObjectToApi {
  public selectedAlgorithms: Array<Item>;
  constructor() { }
}

export class Common {
  public static ControlType = ControlType;
  public static CheckboxPrefix = 'cbLanguage_';
  public static OtherPrefix = 'otherValue_';
}

