import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { CrudService } from '../../services/crud.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent implements OnInit {
  @Input() users!: User[];

  clickEventSubscription: Subscription;

  constructor(
    private crudService: CrudService,
    private sharedService: SharedService
  ) {
    this.clickEventSubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => this.ngOnInit());
  }

  ngOnInit(): void {
    this.crudService.getUsers().subscribe((users) => (this.users = users));
  }

  deleteUser(user: User) {
    this.crudService.deleteById(user.id!).subscribe(() => this.ngOnInit());
  }

  writeForm(user: User) {
    this.sharedService.sendUser(user);
  }
}
