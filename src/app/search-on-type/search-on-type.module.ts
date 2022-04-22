import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOnTypeComponent } from './pages/search-on-type/search-on-type.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchOnTypeComponent,
    SearchBarComponent,
    ResultTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchOnTypeComponent,
    SearchBarComponent,
    ResultTableComponent
  ]
})
export class SearchOnTypeModule { }
