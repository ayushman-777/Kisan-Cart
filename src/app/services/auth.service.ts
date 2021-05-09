import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.user.isAnonymous : false;
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    return (this.authState !== null) && (!this.isUserAnonymousLoggedIn);
  }

  registerWithEmail(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  }

  signOut(): void {
    this.authState = null;
    this.angularFireAuth.signOut().then(() => {
      console.log('LoggedOut');
    }).catch((error) => {
      console.log(error);
    });
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.angularFireAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }
}
