import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private API_LOGIN = environment.TAPI_LOGIN;

  login(credentials) {
    console.log(credentials);

    this.http.post(this.API_LOGIN, credentials,{observe : 'response' as 'response'})
              .subscribe(
                (_response:HttpResponse<any>) => { console.log(_response.headers.get('Authorization') );
                                    console.log(_response.body.jwt );
  
                                // console.log(this.http.request);
                              localStorage.setItem('token', _response.body.jwt);
                                // console.log('token='+res.jwt)
                               } ,
                    err => console.log(err));
  }
}
