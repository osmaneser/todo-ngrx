import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthResponse } from 'src/app/shared/models/auth-response';
import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects{

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {

      return this.http.post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaC9lj3wbpFTQKKpcjo_CojHVfkGIujUs',
        {
          email:authData.payload.email,
          password:authData.payload.password,
          returnSecureToken:true
        }
      ).pipe(

        map(resData =>{
          const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
          return new AuthActions.Login({email:resData.email, userId:resData.localId, token:resData.idToken, expirationDate:expirationDate});
        }),
        catchError(error  => {
          let errorMessage = 'An unknown occured!';

          if (!error.error || !error.error.error) {
            return of(new AuthActions.LoginFail(errorMessage))
          }
          switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This is email exists already.';
              break;
            case 'EMAIL_NOT_FOUND':
              errorMessage = 'This is email not found.';
              break;
            case 'INVALID_PASSWORD':
              errorMessage = 'Invalid Password!';
              break;
            default:
              break;
          }
        return of(new AuthActions.LoginFail(errorMessage));
        })
      );
    }),
  )

  @Effect({dispatch:false})
  authSuccess = this.actions$.pipe(ofType(AuthActions.LOGIN),tap(()=>{
    this.router.navigate(['tasks']);
  }));

  constructor(private actions$: Actions, private http: HttpClient, private router: Router){}
}
