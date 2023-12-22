import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDoService } from './i-to-do-service';
import { ToDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService implements IToDoService {
  restUrl: string = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  save(toDo: ToDo): Observable<string> {
    return this.httpClient.post(`${this.restUrl}/save`, toDo, { responseType: 'text' });
  }

  todos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(`${this.restUrl}/todos`, { responseType: 'json' });
  }

  delete(toDoId: number): Observable<string> {
    return this.httpClient.delete(`${this.restUrl}/delete`, { responseType: 'text' });
  }
}