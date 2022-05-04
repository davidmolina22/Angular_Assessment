import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  @Input() lightsOn: boolean = false;
  @Input() selectedColor: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
