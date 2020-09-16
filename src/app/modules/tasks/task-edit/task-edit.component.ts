import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { find, take, takeWhile, tap } from 'rxjs/operators';
import { Task } from 'src/app/shared/models/task';

import * as fromApp from '../../../shared/store/app.reducer';
import * as TaskActions from '../store/task.actions';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  taskForm:FormGroup;

  task:Task;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) {

    this.task = new Task(0,null,null,0,0);
  }

  taskId:number = 0;

  ngOnInit(): void {

    this.taskForm = new FormGroup({
      'name':new FormControl('',Validators.required),
      'description':new FormControl('',Validators.required),
      'importance':new FormControl('',Validators.required)
    })

    this.route.params.subscribe((param)=>{
      this.taskId = +param['id'];
    })

    if (this.taskId > 0) {
      this.store.select('tasks').subscribe((res)=>{

        const findTask = res.tasks.find(w=>w.id == this.taskId);
        if (findTask != null) {
          this.task = {...this.task, ...findTask};
        }
      })
    }
  }

  onSubmit(){

    if (this.taskForm.valid) {

      if (this.taskId > 0) {

        this.store.dispatch(new TaskActions.UpdateTask({id:this.taskId, task:this.task}))

      } else {

        this.taskForm.setControl('isAssign',new FormControl(0));
        this.store.dispatch(new TaskActions.AddTask(this.taskForm.value));

      }
    }

  }

}
