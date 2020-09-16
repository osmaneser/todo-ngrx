import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
 {path:'', redirectTo:'auth',pathMatch:'full'},
 {path:'auth', loadChildren: ()=> import('./core/auth/auth.module').then(a=>a.AuthModule)},
 {path:'tasks', loadChildren:()=> import('./modules/tasks/tasks.module').then(t=>t.TasksModule)},
 {path:'works', loadChildren:()=> import('./modules/works/works.module').then(w=>w.WorksModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {

 }
