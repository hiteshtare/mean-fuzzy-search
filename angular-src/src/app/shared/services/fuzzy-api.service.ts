import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FuzzyApiService {

  headers: HttpHeaders;
  showLoader = false;
  loadingMessage = '';

  // For Developement
  public fuzzyApiUrl = '';
  // For Production
  // private fuzzyApiUrl = '';

  constructor(private http: HttpClient) {
  }

  getDefaultResults(options): Observable<Response> {
    return this.http.post(`${this.fuzzyApiUrl}/fuzzy/default/`, options).pipe(map((data: Response) => {
      return data;
    }));
  }

  getCustomResults(options): Observable<Response> {
    return this.http.post(`${this.fuzzyApiUrl}/fuzzy/custom/`, options).pipe(map((data: Response) => {
      return data;
    }));
  }
}

