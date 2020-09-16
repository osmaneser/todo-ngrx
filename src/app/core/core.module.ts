import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { GuardsModule } from './guards/guards.module';
import { HttpModule } from './http/http.module';
import { InterceptorsModule } from './interceptors/interceptors.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    GuardsModule,
    HttpModule,
    InterceptorsModule
  ],
  exports: [
    AuthModule,
    GuardsModule,
    HttpModule,
    InterceptorsModule,
  ]
})
export class CoreModule { }
