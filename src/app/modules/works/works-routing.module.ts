import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorkEditComponent } from './work-edit/work-edit.component';
import { WorkListComponent } from './work-list/work-list.component';



const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list', component:WorkListComponent},
  {path:'edit/:id', component:WorkEditComponent},
  {path:'detail/:id', component:WorkDetailComponent},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class WorksRoutingModule { }
