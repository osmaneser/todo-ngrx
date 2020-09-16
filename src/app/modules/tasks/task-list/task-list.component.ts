import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task';
import * as fromApp from '../../../shared/store/app.reducer';

import * as TaskActions from '../store/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Observable<{tasks:Task[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

    this.tasks = this.store.select('tasks');

    this.tasks.subscribe((res)=>{
      if (res.tasks.length == 0) {
        this.store.dispatch(new TaskActions.LoadTask());
      }
    })


  }

  onDelete(id){
    this.store.dispatch(new TaskActions.DeleteTask(id))
  }

}
