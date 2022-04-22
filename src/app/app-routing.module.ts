import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayHideComponent } from './display-hide/pages/display-hide/display-hide.component';
import { InicioComponent } from './inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {
    path: 'display_hide',
    component: DisplayHideComponent // TODO: Cambiar este componente
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
