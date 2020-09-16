import { Action } from '@ngrx/store';
import { Task } from '../../../shared/models/task';


export const LOAD_TASK = "[Task] Load Task";

export const ADD_TASK = "[Task] Add Task";
export const ADD_TASK_SUCCESS = "[Task] Add Task Success";
export const ADD_TASKS = "[Task] Add Tasks";
export const DELETE_TASK = "[Task] Delete Task";
export const UPDATE_TASK = "[Task] Update Task";
export const UPDATE_SUCCESS = "[Task] Update Success";
export const DELETE_SUCCESS = "[Task] Delete Success";
export const ADD_FAIL = "[Task] Add Fail"
export const FILL_TASK = "[Task] Fill Task";


export class LoadTask implements Action {
  readonly type = LOAD_TASK;
}

export class FillTask implements Action {
  readonly type = FILL_TASK;
  constructor(public payload: Task[]){}
}

export class AddTask implements Action{
  readonly type = ADD_TASK;
  constructor(public payload: Task){}
}

export class AddTaskSuccess implements Action{
  readonly type = ADD_TASK_SUCCESS;
  constructor(public payload: Task){}
}

export class AddTasks implements Action{
  readonly type = ADD_TASKS;
  constructor(public payload: Task[]){}
}

export class UpdateTask implements Action{
  readonly type = UPDATE_TASK;
  constructor(public payload: {id:number, task:Task}){}
}
export class UpdateSuccess implements Action{
  readonly type = UPDATE_SUCCESS;
  constructor(public payload: {id:number, task:Task}){}
}

export class DeleteTask implements Action{
  readonly type = DELETE_TASK;
  constructor(public payload: number){}
}
export class DeleteSuccess implements Action{
  readonly type = DELETE_SUCCESS;
  constructor(public payload: number){}
}

export class AddFail implements Action{
  readonly type = ADD_FAIL;
  constructor(public payload: string){}
}


export type TaskActions = UpdateTask | DeleteTask | AddTask | AddTasks | LoadTask | FillTask | UpdateSuccess | AddTaskSuccess | DeleteSuccess;
