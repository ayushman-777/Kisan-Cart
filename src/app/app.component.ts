import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from './login/login.component';
import {AngularFireAuth} from '@angular/fire/auth';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KisanCart';

  loginModelRef: BsModalRef;
  signUpModelRef: BsModalRef;

  constructor(private modalService: BsModalService, public authService: AuthService, private router: Router, private angularFireAuth: AngularFireAuth) {
  }

  openLogin(): void {
    this.loginModelRef = this.modalService.show(LoginComponent);
  }

  openSignUp(): void {
    this.signUpModelRef = this.modalService.show(SignUpComponent);
  }

  get isUserLoggedIn(): boolean {
    return this.authService.isUserEmailLoggedIn;
  }

  signOutUser() {
    this.authService.signOut();
  }
}
