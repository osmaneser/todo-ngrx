import {Action} from '@ngrx/store';
import { Work } from 'src/app/shared/models/work';


export const ADD_WORK = 'ADD_WORK';
export const ADD_WORKS = 'ADD_WORKS';
export const UPDATE_WORK = 'UPDATE_WORK';
export const DELETE_WORK = 'DELETE_WORK';


export class AddWork implements Action{
  readonly type = ADD_WORK;

  constructor(public payload: Work){}
}

export class AddWorks implements Action{
  readonly type = ADD_WORKS;

  constructor(public payload: Work[]){}
}


export class UpdateWork implements Action{
  readonly type = UPDATE_WORK;

  constructor(public payload: {id:number, work: Work}){}
}

export class DeleteWork implements Action{
  readonly type = DELETE_WORK;

  constructor(public payload: number){}
}

export type WorkActions = AddWork | AddWorks | UpdateWork | DeleteWork;
