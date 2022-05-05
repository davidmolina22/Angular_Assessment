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

  // We get the input check value to change the value of lightsOn
  toggleOn(event: any) {
    if (event.target.checked) {
      this.lightsOn = true;
    }
    if (!event.target.checked) {
      this.lightsOn = false;
    }
  }

  // We get the selected color from the select input
  getSelectedColor(event: any) {
    this.selectedColor = event.target.value;
    console.log(this.selectedColor);
  }

  constructor() {}

  ngOnInit(): void {}

  // Transform the enum values to keys (instead of display 0, 1, etc., we display the keys: 'Red', ...)
  getColorsFromEnum(): Array<string> {
    const keys = Object.keys(Colors);
    return keys.slice(keys.length / 2);
  }
}
