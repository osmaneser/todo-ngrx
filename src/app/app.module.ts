import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/auth/auth.module';

import * as fromApp from './shared/store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/auth/store/auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { TaskEffects } from './modules/tasks/store/task.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, TaskEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[SharedModule]
})
export class AppModule { }
