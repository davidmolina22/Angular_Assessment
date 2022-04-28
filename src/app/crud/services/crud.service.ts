import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    if (user.id) {
      return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user, {
        headers: this.headers,
      });
    } else {
      return this.http.post<User>(`${this.baseUrl}/users`, user, {
        headers: this.headers,
      });
    }
  }
}
