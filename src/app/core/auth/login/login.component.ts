import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../shared/store/app.reducer';
import * as AuthActions from '../store/auth.actions';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '../services/auth.sevice';
import { Router } from '@angular/router';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  signInForm:FormGroup
  hide:boolean = true;
  isLoading:boolean = false;
  loadedUser:User;
  constructor(private authService:AuthService, private store: Store<fromApp.AppState>, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {


    this.signInForm = new FormGroup({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })


    this.store.select('auth').subscribe((authState)=>{
      console.log(authState);
      this.isLoading = authState.loading;

      authState.authError ? this.dialog.open(DialogComponent, {data: {content:authState.authError}}) : '';

    })

  }

  onSubmit(){
    const value = this.signInForm.value;
    console.log(value);
    if (this.signInForm.valid) {
      //this.authService.login(value.email, value.password);
      this.store.dispatch(new AuthActions.LoginStart({email:value.email, password:value.password}));
    }

  }
}
