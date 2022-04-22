import { Injectable } from '@angular/core';
import { Exercise } from '../interfaces/exercise.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private _exercises: Exercise[] = [{name:'Display/Hide', url: 'display_hide'}];

  get exercises () {
    return this._exercises;
  }
}
