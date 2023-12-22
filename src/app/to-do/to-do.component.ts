import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToDo } from '../todo';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit, OnChanges {
  msg: string = "";
  toDo: ToDo = new ToDo();
  toDos: ToDo[] = [];
  summary: string = "";
  showToDo: ToDo = new ToDo();

  constructor(private toDoService: ToDoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.todos();
  }

  todos() {
    this.toDoService
      .todos()
      .subscribe(response => {
        this.toDos = response;
        if (this.toDos.length != 0) {
          this.showToDo = this.toDos[0];
        }
      });
  }

  delete(toDoId: number) {
    this.toDoService
      .delete(toDoId)
      .subscribe(response => this.msg = response);
  }

  selectToDo(index: number) {
    this.showToDo = this.toDos[index];
  }
}