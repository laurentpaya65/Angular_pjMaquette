import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  private API_LOGIN = environment.TAPI_LOGIN;
  userPresent:boolean = false;
  title = 'Demo';
  greeting = {};

  constructor(private http:HttpClient,
              public us:UserService) {
    // http.get(this.API_URL+'resource').subscribe(data => this.greeting = data);
   }

  ngOnInit(): void {
    this.userPresent = false;
  }
  onLoginSubmit(loginForm) {
    
    console.log("Données du form=",loginForm.value);
    this.us.login(loginForm.value);

    this.userPresent = true;
    


  // this.http.post(this.API_LOGIN, loginForm.value,{observe : 'response' as 'response'})
  //           .subscribe(
  //             (_response:HttpResponse<any>) => { console.log(_response.headers.get('Authorization') );
  //                                 console.log(_response.body.jwt );

  //                             // console.log(this.http.request);
  //                           localStorage.setItem('token', _response.body.jwt);
  //                             // console.log('token='+res.jwt)
  //                            } ,
  //                 err => console.log(err));
                  

  }

}
