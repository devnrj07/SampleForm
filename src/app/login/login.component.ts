import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm: FormGroup;

  navLinks = [
    { path: '/login', label: 'Sign In' },
    { path: '/sign', label: 'Sign Up' },
   
   
  ];

  ngOnInit() {
    this.createform();
  }

  createform() {
    this.loginForm = this.fb.group({
  email: ['', [Validators.required, 
  Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]],
  password : ['', Validators.required]
    });

  }

  login () {
    console.log(this.loginForm.value);
  }
}
