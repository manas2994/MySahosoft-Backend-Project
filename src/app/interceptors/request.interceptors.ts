import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../components/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptors implements HttpInterceptor {

  constructor(private _authservice:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // throw new Error('Method not implemented.');
   let request: any;
    let currentUser: any;
    let isLoggedIn: boolean;

    this._authservice.isLoggedIn.subscribe(res=>{
      isLoggedIn=res;
      if(isLoggedIn){
        this._authservice.CurrentUser.subscribe(res=>{
          currentUser=res;
          request=req.clone({setHeaders:{
            'Content-Type':'application/json',
            'Authorization' : `Bearer ${currentUser.token}`
          }
          })
        })
      }else{
        request=req.clone({setHeaders:{
          'Content-Type':'application/json'}
        })

      }
    })
    return next.handle(request);
  }


 

 

  
}
 

 
