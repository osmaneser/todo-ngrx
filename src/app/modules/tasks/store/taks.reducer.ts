import { Task } from '../../../shared/models/task';
import * as TaskActions from './task.actions';

export interface State{
  tasks:Task[];
  editedTask:Task;
  editedTaskId:number;
}

const initialState : State = {
  tasks:[],
  editedTask:null,
  editedTaskId:0
}

export function taskReducer(state = initialState, action: TaskActions.TaskActions){

  switch (action.type) {

    case TaskActions.FILL_TASK:
      return {
        ...state,
        tasks:[...state.tasks, ...action.payload]
      }

    case TaskActions.ADD_TASK_SUCCESS:

        console.log(action.payload);
      return {
        ...state,
        tasks:[...state.tasks, action.payload]
      }

    case TaskActions.UPDATE_SUCCESS:
      const findTaskIndex = state.tasks.findIndex(w=>w.id == action.payload.id);

      const updatedTask = {
        ...state.tasks[findTaskIndex],
        ...action.payload.task
      }

      console.log(updatedTask);

      const updatedTasks = [...state.tasks];
      updatedTasks[findTaskIndex] = updatedTask;

      console.log(updatedTasks);
      return {
        ...state,
        tasks:updatedTasks
      }


    case TaskActions.DELETE_SUCCESS:

      const findIndex = state.tasks.findIndex(w=>w.id == action.payload);

      if (findIndex != -1) {
        return {
          ...state,
          tasks: state.tasks.filter((task, wIndex)=>{
            return wIndex !== findIndex
          }) ,
          editedTask:null,
          editedTaskId:0
        }
      }
      return state;
    default:
      return state;
  }
}
