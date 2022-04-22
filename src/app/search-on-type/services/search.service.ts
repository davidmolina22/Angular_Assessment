import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // Url of public API
  private baseUrl: string = 'https://restcountries.com/v3.1';

  // We are doing this because we don't want all the object. We only want this fields.
  get params() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  // Inject the HttpClient Service from angular/common/http
  constructor(private http: HttpClient) {}

  // Method for searching in the API.
  searchCountries(term: string): Observable<Pais[]> {
    // We build the url for the request (we are searching by name)
    const url = `${this.baseUrl}/name/${term}`;
    
    return this.http.get<Pais[]>(url, { params: this.params });
  }
}
