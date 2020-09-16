import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/shared/models/task';

import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions, private http: HttpClient, private router: Router, private taskService: TaskService){}

  @Effect()
  addTask = this.actions$.pipe(
    ofType(TaskActions.ADD_TASK),
    switchMap(((task: TaskActions.AddTaskSuccess)=>{


      return this.taskService.addTask(task.payload).pipe(
        map(resData=>{
          this.router.navigate(['/tasks']);
          return new TaskActions.AddTaskSuccess({id:resData.id, name:resData.name, isAssign:resData.isAssign, importance:resData.importance, description:resData.description})
        }),
        catchError(error => {
          let errorMessage = '';
          return of(new TaskActions.AddFail(errorMessage))
        })
      )

    }))
  )


  @Effect()
  loadTask = this.actions$.pipe(
    ofType(TaskActions.LOAD_TASK),
    switchMap((tasks: TaskActions.LoadTask)=>{

      return this.taskService.getTasks().pipe(
        map(tasks=>{
          console.log(tasks)
          return new TaskActions.FillTask(tasks);
        }),
        catchError(error => {
          // let error = 'mesage';
          // return of(new TaskActions.LoadFail(error));
          return error;
        })
      )
    })
  )


  @Effect()
  updateTask = this.actions$.pipe(
    ofType(TaskActions.UPDATE_TASK),
    switchMap((task: TaskActions.UpdateTask)=>{
      const updatedTask = task.payload.task;
      return this.taskService.updateTask({id:task.payload.id},task.payload.task).pipe(
        map(task=>{
          this.router.navigate(['/tasks']);
          return new TaskActions.UpdateSuccess({id:updatedTask.id, task:task});
        }),
        catchError(error => {
          // let error = 'mesage';
          // return of(new TaskActions.LoadFail(error));
          return error;
        })
      )
    })
  )

  @Effect()
  deleteTask = this.actions$.pipe(
    ofType(TaskActions.DELETE_TASK),
    switchMap((todo: TaskActions.DeleteTask)=>{
      return this.taskService.deleteTask({id:todo.payload}).pipe(
        map(resp=>{
          this.router.navigate(['/tasks']);
          return new TaskActions.DeleteSuccess(todo.payload);
        }),
        catchError(error => {
          // let error = 'mesage';
          // return of(new TaskActions.LoadFail(error));
          return error;
        })
      )
    })
  )

}
