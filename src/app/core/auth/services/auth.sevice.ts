import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';

import * as AuthActions from '../store/auth.actions';
import * as fromAuth from '../../../shared/store/app.reducer';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private store:Store<fromAuth.AppState>, private router:Router) { }

  autoLogin(){
    let userData: User = JSON.parse(localStorage.getItem('userData'));

    if (!userData)
      return;

    const loadedUser = new User(userData.userId,userData.email,userData.token, userData.expirationDate);

    if (loadedUser.token) {
      this.store.dispatch(new AuthActions.Login({
        email:loadedUser.email,
        userId:loadedUser.userId,
        token:loadedUser.token,
        expirationDate:loadedUser.expirationDate
      }));
      this.router.navigate(['home']);
    }

  }

  login(email: string, password: string){

    let loadedUser = new User('1','osmaneser@gmail.com','aeFaSEgCXvsWSFhfD34',new Date(1996,6,3,0,0,0,0))

    this.store.dispatch(new AuthActions.Login({
      email:loadedUser.email,
      userId:loadedUser.userId,
      token:loadedUser.token,
      expirationDate:loadedUser.expirationDate
    }));

    localStorage.setItem('userData', JSON.stringify(loadedUser));

    this.router.navigate(['home']);

  }

  logout(){
    this.store.dispatch(new AuthActions.Logout());
    localStorage.removeItem('userData');
  }
}
