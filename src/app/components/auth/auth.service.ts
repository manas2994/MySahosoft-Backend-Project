import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
message :string='';
private currentUser = new BehaviorSubject<any>(null); // for token
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor( private router :Router) { }

  get CurrentUser() {
    return this.currentUser.asObservable();
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  authLogin(res: any) {
    if (res.id === 0) {
      this.message = "Please enter valid username and password !!";
      localStorage.clear();
      this.currentUser.next(null);
      this.loggedIn.next(false);
    } else {
      this.message = "";
      localStorage.setItem("userDetails", JSON.stringify(res));
      this.currentUser.next(res);
      this.loggedIn.next(true);
      this.router.navigate(['dashboard/default']);
    }
  }

  getMessage() : string {
    return this.message;
  }

  logout(){
    localStorage.clear();
    this.currentUser.next(null);
    this.loggedIn.next(false);
    this.router.navigate(['auth/login']);
  }
}
