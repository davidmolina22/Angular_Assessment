import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {}
}
