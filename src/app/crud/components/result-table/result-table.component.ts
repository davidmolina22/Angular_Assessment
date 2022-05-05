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
    // If the form send the click event, we call the onInit method
    this.clickEventSubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => this.ngOnInit());
  }

  // We make the GET request to the backend
  ngOnInit(): void {
    this.crudService.getUsers().subscribe((users) => (this.users = users));
  }

  // If we click on the trash icon, we call the crud service to delete the user by its id
  deleteUser(user: User) {
    this.crudService.deleteById(user.id!).subscribe(() => this.ngOnInit());
  }

  // If we click on the pen icon, we call the shared service to send the user to the form
  writeForm(user: User) {
    this.sharedService.sendUser(user);
  }
}
