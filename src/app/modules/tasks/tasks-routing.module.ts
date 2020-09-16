import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list', component:TaskListComponent},
  {path:'edit/:id', component:TaskEditComponent},
  {path:'detail/:id', component:TaskDetailComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class TasksRoutingModule { }
