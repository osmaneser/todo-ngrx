import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  passHide = true;
  rePassHide = true;
  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required, Validators.email]),
      'phone':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    console.log(this.registerForm);
  }


}
