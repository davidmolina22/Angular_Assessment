import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchOnTypeComponent,
    SearchBarComponent,
    ResultTableComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SearchOnTypeComponent, SearchBarComponent, ResultTableComponent],
})
export class SearchOnTypeModule {}
