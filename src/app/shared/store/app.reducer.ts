import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../../core/auth/store/auth.reducer';
import * as fromWork from '../../modules/works/store/work.reducer';
import * as fromTask from '../../modules/tasks/store/taks.reducer';


export interface AppState{
  works:fromWork.State;
  auth:fromAuth.State;
  tasks:fromTask.State;
}


export const appReducer: ActionReducerMap<AppState> = {
  tasks:fromTask.taskReducer,
  works:fromWork.workReducer,
  auth:fromAuth.authReducer
};
