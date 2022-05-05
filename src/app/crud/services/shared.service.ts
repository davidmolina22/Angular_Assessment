import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  // We use this shared service to pass properties between siblings (without involving the parent)

  private subject = new Subject<void>();

  private userSubject = new Subject<User>();

  // Send & get click event allow us to send an event so the table can see we have updated the db (for make a new request) 
  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  // Same as above. These methods allow us to send and receive the full user object between the table and the form
  sendUser(user: User) {
    this.userSubject.next(user);
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  constructor() {}
}
