import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SignInForm, SignUpForm } from '../auth';

interface User {
  uid: string | null | undefined;
  email: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | null = null;

  get isLoggedIn(): boolean{
    return !!this._user;
  }

  get userId() {
    return this._user?.uid
  }
  private _initiated = false;
  get initiated(): boolean {
    return this._initiated;
  }

  constructor(private auth: AngularFireAuth){
    // this.auth.onAuthStateChanged((user) =>{
    //   this._user = user;

    //   if(!this._initiated){
    //     this._initiated = true;
    //   }
    // });
    this.auth.onAuthStateChanged((user) => {
      if(user) {
        this._user = {
          email: user?.email,
          uid: user?.uid,
        };
        return;
      }
      this._user = null;
      console.log((this._user))
    })
  }
  signIn({email, password}:SignInForm){
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  signUp({email, password}: SignUpForm){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  signOut(){
    return this.auth.signOut();
  }

}



