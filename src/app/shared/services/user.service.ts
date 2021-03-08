import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$ = new BehaviorSubject<User>(null);
  user: User;

  constructor(private http:HttpClient,
              private http1:HttpClient) { }

  private API_LOGIN = environment.TAPI_LOGIN;
  private API_ROOT = environment.TAPI_ROOT;

  login(credentials) {
    console.log("credentials dans login()=",credentials);

    this.http.post(this.API_LOGIN, credentials,{observe : 'response' as 'response'})
              .subscribe(
                (_response:HttpResponse<any>) => {
                                    console.log("-response=",_response);
                                    console.log("_response.headers.get('Authorization')",_response.headers.get('Authorization') );
                                    console.log("_response.body.jwt",_response.body.jwt );

                                    // console.log(this.http.request);
                                    localStorage.setItem('token', _response.body.jwt);
                                    // console.log('token='+res.jwt)
                                    this.getUser(credentials);
                               } ,
                    err => console.log(err));
  }

  getUser(credentials) {
    console.log('API getUser=',this.API_ROOT + '/' + credentials.username);
    this.http1.get(this.API_ROOT + '/' + credentials.username)
      // .pipe( map  (
      //           (res:any) =>
      //                new User(1,
      //                         res.username,
      //                         "",
      //                         "",
      //                         "",
      //                         res.password,
      //                         res.active,
      //                         null
      //                         )
      //           )
      //       )

      .subscribe( (res:any) => { console.log("res.username",res.username);
                            let user:User = new User(1,
                              res.username,
                              "",
                              "",
                              "",
                              res.password,
                              res.active,
                              null,
                              null
                              );
                              console.log("user=",user);
                            this.user$.next(user);

                          console.log("subject user$="+this.user$);

                        })
  }
  postUserToApi(userObj) {
    this.http.post(this.API_ROOT + "/user/create",userObj)
      .subscribe(res => console.log(res) ,
                      err => console.log(err) )   ;
  }
  getUserFromApi() {
    this.http.get(this.API_ROOT + "/user/getUserByUsername/"+"johnny")
      .subscribe((res:any) => {console.log(res) ;
                              this.user = res;
                              this.user$.next(this.user);
                              console.log(this.user$)},

                  err => console.log(err) )   ;
  }
}
