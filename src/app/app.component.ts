import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';

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

  constructor(private modalService: BsModalService) {
  }

  openLogin(): void {
    this.loginModelRef = this.modalService.show(LoginComponent);
  }

  openSignUp(): void {
    this.signUpModelRef = this.modalService.show(SignUpComponent);
  }
}
