import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../todo';
import { response } from 'express';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  msg: string = "";
  toDo: ToDo = new ToDo();
  toDos: ToDo[] = [];
  constructor(private toDoService: ToDoService) { };

  save() {
    this.toDoService
      .save(this.toDo)
      .subscribe(response => this.msg = response);
  }
}
