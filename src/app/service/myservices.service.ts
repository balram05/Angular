import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
private apiUrl="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }

  // using a service for api call 
  // calling it in the pipe components 
  getUsersData(): Observable<string[]> {
    return this.http.get<{ users: { name: string }[] }>(this.apiUrl).pipe(
      map(response => response.users.map(user => user.name)) // Extract names
    );
  }
}
