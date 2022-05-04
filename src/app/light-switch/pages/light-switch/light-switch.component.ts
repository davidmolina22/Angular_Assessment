import { Component, OnInit } from '@angular/core';
import { Colors } from '../../interfaces/lights.interface';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css'],
})
export class LightSwitchComponent implements OnInit {
  lightsOn: boolean = false;
  selectedColor: string = 'red';

  toggleOn(event: any) {
    if (event.target.checked) {
      this.lightsOn = true;
    }
    if (!event.target.checked) {
      this.lightsOn = false;
    }
  }

  getSelectedColor(event: any) {
    this.selectedColor = event.target.value;
    console.log(this.selectedColor);
  }

  constructor() {}

  ngOnInit(): void {}

  getColorsFromEnum(): Array<string> {
    const keys = Object.keys(Colors);
    return keys.slice(keys.length / 2);
  }
}
