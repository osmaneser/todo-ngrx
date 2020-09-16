import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkEditComponent } from './work-edit/work-edit.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorksRoutingModule } from './works-routing.module';



@NgModule({
  declarations: [WorksComponent, WorkListComponent, WorkEditComponent, WorkDetailComponent],
  imports: [
    CommonModule,
    WorksRoutingModule
  ]
})
export class WorksModule { }
