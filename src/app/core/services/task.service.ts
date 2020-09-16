import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/task';
import { HttpService } from '../http/http.service';

@Injectable({providedIn: 'root'})
export class TaskService {
  constructor(private httpService: HttpService) { }

  getTasks():Observable<any>{
    return this.httpService.get('Todo/ListTodo');
  }
  addTask(model:Task):Observable<any>{
    return this.httpService.post('Todo/AddTodo',model);
  }
  updateTask(query:any, model:Task):Observable<any>{
    return this.httpService.postWithQuery('Todo/UpdateTodo',query,model);
  }
  deleteTask(query:any):Observable<any>{
    return this.httpService.postWithQuery('Todo/DeleteTodo',query,null);
  }

}
