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

    this.searchService.searchCountries(term).subscribe(
      (paises) => (this.paises = paises),
      (err) => (this.paises = [])
    );
  }
}
