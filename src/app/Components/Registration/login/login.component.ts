import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login_error = false;
  user;

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login(this.f.username.value, this.f.password.value).subscribe(
        data => {
          this.user = data;
          if(data === 'Username or password is not correct') {
            this.login_error = true;
          } else {
            console.log(data);
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('ldap_user', JSON.stringify(data));
              this.router.navigate(['/messenger']);
          }
          //this.router.navigate(['/messenger']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
