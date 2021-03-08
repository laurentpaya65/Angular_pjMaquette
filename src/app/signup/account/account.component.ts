import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  contactForm: FormGroup;
  user:User;

  constructor(private fb: FormBuilder,
              private ms: UserService) { }

  ngOnInit(): void {
    this.ms.getUserFromApi();
    this.ms.user$.subscribe(data => {this.user = data;
                                        console.log(this.user)})

    this.contactForm = this.fb.group({
      username: ['johnny'],
      password: ['john'],
      firstname: ['john'],
      lastname: ['john'],
      emailAddress: ['john@gmail.com']
    });
  }

  onSubmit(form) {
    console.log(form);
    console.log(form.value);
    this.ms.postUserToApi(form.value);
  }

}
