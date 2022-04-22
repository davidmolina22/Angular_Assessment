import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  get params() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  searchCountries(term: string): Observable<Pais[]> {
    const url = `${this.baseUrl}/name/${term}`;
    return this.http.get<Pais[]>(url, { params: this.params });
  }
}
