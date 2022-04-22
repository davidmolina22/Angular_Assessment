import { Component } from '@angular/core';
import { Exercise } from 'src/app/inicio/interfaces/exercise.interface';
import { ExercisesService } from 'src/app/inicio/services/exercises.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  constructor(private exercicesService: ExercisesService) { }

  exercises = this.exercicesService.exercises;
}
