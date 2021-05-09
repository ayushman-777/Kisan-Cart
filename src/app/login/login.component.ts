import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = {name: '', message: ''}; // for firbase error handle

  constructor(private modalService: BsModalService
    ,         private modalRef: BsModalRef, private authService: AuthService, private router: Router) {
  }

  signUpModelRef: BsModalRef;

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  login() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() => {
          this.message = 'You\'re LoggedIn';
          this.modalRef.hide();
          console.log('You\'re Logged In');
        }).catch(_error => {
        this.error = _error;
        // this.router.navigate([''])
      });
    }

  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = 'Please Enter Email id';
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = 'Please Enter password';
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;

  }

  openSignUp(): void {
    this.signUpModelRef = this.modalService.show(SignUpComponent);
  }

  async onForget() {
    try {
      const email = this.email;
      await this.authService.resetPassword(email);
      window.alert('Email sent, check your inbox!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
