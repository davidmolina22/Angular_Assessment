import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Url of our backend (json-server)
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Set the headers for the POST / PUT requests
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  // Delete user by ID
  deleteById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  // Create / Edit user by ID
  createUser(user: User): Observable<User> {
    // If user.id is not null (user exists in the db) we call PUT to edit the user
    if (user.id) {
      return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user, {
        headers: this.headers,
      });
    } else {
      // Else (user doesn't exists in the db) we call POST to create a new user
      return this.http.post<User>(`${this.baseUrl}/users`, user, {
        headers: this.headers,
      });
    }
  }
}
