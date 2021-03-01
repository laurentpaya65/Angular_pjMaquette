import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  private API_LOGIN = environment.TAPI_LOGIN;
  private API_ROOT = environment.TAPI_ROOT;
  cloneReq:HttpRequest<unknown>;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if(request.url.includes(this.API_ROOT) && request.url != this.API_LOGIN ) {
      this.cloneReq = request.clone({headers: 
        request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))})
    } else {
      this.cloneReq = request;
    }
    return next.handle(request);
  }
}
