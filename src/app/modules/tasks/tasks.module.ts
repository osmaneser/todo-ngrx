import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [TaskListComponent, TaskEditComponent, TaskDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ],
  exports: [TaskListComponent, TaskEditComponent, TaskDetailComponent],
})
export class TasksModule { }
