import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './pages/crud/crud.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { FormComponent } from './components/form/form.component';
import { SubscribedPipe } from './pipes/subscribed.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrudComponent,
    ResultTableComponent,
    FormComponent,
    SubscribedPipe
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CrudComponent],
})
export class CrudModule {}
