import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  // Estos usuarios tienen que venir desde el servicio, llamando al backend
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {}
}
