import { Work} from '../../../shared/models/work';
import * as WorkActions from '../store/work.actions';


export interface State {
  works:Work[];
  editedWork:Work;
  editedWorkId:number;
}

const initialState: State = {
   works:[new Work(1,1,1,1),new Work(1,1,2,2)],
   editedWork:null,
   editedWorkId:0
}

export function workReducer(state = initialState, action: WorkActions.WorkActions){

  switch (action.type) {
    case WorkActions.ADD_WORK:
      const work = new Work(
        action.payload.id,
        action.payload.taskId,
        action.payload.userId,
        action.payload.status
      )
      return {
        ...state,
        works:[...state.works,action.payload]
      };
    case WorkActions.ADD_WORKS:
      return {
        ...state,
        works:[...state.works, ...action.payload]
      };

    case WorkActions.UPDATE_WORK:
      const findWorkIndex = state.works.findIndex(w=>w.id == action.payload.id);

      if(findWorkIndex != -1){
        const findWork = state.works[findWorkIndex];
        const updatedWork = {
          ...findWork,
          ...action.payload.work
        }

        const updatedWorks = [...state.works];
        updatedWorks[state.editedWorkId] = updatedWork;

        return {
          ...state,
          works:updatedWorks,
          editedWork:null,
          editedWorkId:0
        };
      }
      else {
        return state;
      }
    case WorkActions.DELETE_WORK:
      //TODO: DELETE CON
      return state;

    default:
      return state;
  }

}
