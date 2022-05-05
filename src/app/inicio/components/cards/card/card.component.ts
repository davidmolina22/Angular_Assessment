import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor() {}

  // We get the properties from the parent (card-list)
  @Input() exerciseName: string = '';
  @Input() index: string = '0';
}
