import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayHideComponent } from './pages/display-hide/display-hide.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DisplayHideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DisplayHideComponent
  ]
})
export class DisplayHideModule { }
