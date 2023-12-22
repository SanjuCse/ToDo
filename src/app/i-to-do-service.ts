import { Observable } from "rxjs";
import { ToDo } from "./todo";

export interface IToDoService {
    save(toDo: ToDo): Observable<string>;

    todos(): Observable<ToDo[]>;

    delete(toDoId: number): Observable<string>;
}
