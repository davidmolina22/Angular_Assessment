import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type.component.html',
  styleUrls: ['./search-on-type.component.scss'],
})
export class SearchOnTypeComponent {
  term: string = '';
  paises: Pais[] = [];

  constructor(private searchService: SearchService) {}

  searchCountries(term: string) {
    this.term = term;

    // We call the service to make the request

    this.searchService.searchCountries(term).subscribe(
      // If there is response, we save paises
      (paises) => (this.paises = paises),
      // If there is any error, we initialize paises to an empty array
      (err) => (this.paises = [])
    );
  }
}
