import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.scss']
})
export class DisplayHideComponent {

  show: boolean = false;

  constructor() { }

  changeVisibility () {
    this.show = !this.show
  }
}
