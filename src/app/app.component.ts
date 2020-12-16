import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KisanCart';
  name = 'varad';

  loginModelRef: BsModalRef;
  signUpModelRef: BsModalRef;

  constructor(public router: Router, private modalService: BsModalService) {
  }

  openLogin(): void {
    this.loginModelRef = this.modalService.show(LoginComponent);
  }

  openSignUp(): void {
    this.signUpModelRef = this.modalService.show(SignUpComponent);
  }
}
