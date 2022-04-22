import { Component } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.scss']
})
export class DisplayHideComponent {

  // Boolean property for show/hide the component
  show: boolean = false;

  constructor() { }

  // Change the show value to the opposite
  changeVisibility () {
    this.show = !this.show
  }
}
