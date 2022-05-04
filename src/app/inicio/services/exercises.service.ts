import { Injectable } from '@angular/core';
import { Exercise } from '../interfaces/exercise.interface';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  // Array of exercises
  private _exercises: Exercise[] = [
    { name: 'Display/Hide', url: 'display_hide' },
    { name: 'Search on Typing', url: 'search_on_type' },
    { name: 'Component Communication', url: 'communication' },
    { name: 'CRUD', url: 'crud' },
    { name: 'Light Switcher', url: 'light_switch' },
    {name: 'Graphs with API', url: 'graphs'}
  ];

  get exercises() {
    return this._exercises;
  }
}
