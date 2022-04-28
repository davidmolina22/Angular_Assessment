import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pais, User } from '../../interfaces/user.interface';
import { CrudService } from '../../services/crud.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userForm: FormGroup;

  user: User = {
    username: '',
    password: '',
    email: '',
    suscrito: false,
    pais: 0,
    ciudad: '',
  };

  constructor(
    private crudService: CrudService,
    private sharedService: SharedService,
    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      username: '',
      password: '',
      repeated: '',
      email: '',
      suscrito: false,
      pais: '',
      ciudad: '',
    });
  }

  ngOnInit(): void {
    this.sharedService
      .getUser()
      .subscribe(
        ({ id, username, password, email, suscrito, pais, ciudad }) => {
          this.userForm.patchValue({
            username,
            password,
            repeated: password,
            email,
            suscrito,
            pais,
            ciudad,
          });

          this.user.id = id;
        }
      );
  }

  createUser() {
    this.user = this.getFormUser();
    this.crudService
      .createUser(this.user)
      .subscribe(() => this.sharedService.sendClickEvent());

    this.userForm.reset();
    this.user.id = undefined;
  }

  getFormUser(): User {
    return {
      id: this.user.id,
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      email: this.userForm.get('email')?.value,
      suscrito: this.userForm.get('suscrito')?.value,
      pais: this.userForm.get('pais')?.value,
      ciudad: this.userForm.get('ciudad')?.value,
    };
  }

  getPaisFromEnum(): Array<string> {
    const keys = Object.keys(Pais);
    return keys.slice(keys.length / 2);
  }
}
