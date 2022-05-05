import { Component } from '@angular/core';
import { ExercisesService } from 'src/app/inicio/services/exercises.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  constructor(private exercicesService: ExercisesService) { }

  // We get the exercises from the service
  exercises = this.exercicesService.exercises;
}
