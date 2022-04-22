import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/cards/card/card.component';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    CardListComponent
  ]
})
export class InicioModule { }
