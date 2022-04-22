import { Injectable } from '@angular/core';
import { Exercise } from '../interfaces/exercise.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private _exercices: Exercise[] = [{name:'Display/Hide', url: 'display_hide'}];

  get exercices () {
    return this._exercices;
  }
}
