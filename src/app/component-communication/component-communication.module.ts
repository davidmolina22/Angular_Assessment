import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './pages/communication/communication.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CommunicationComponent, ParentComponent, ChildComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommunicationComponent, ParentComponent, ChildComponent],
})
export class ComponentCommunicationModule {}
