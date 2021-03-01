import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbarre',
  templateUrl: './navbarre.component.html',
  styleUrls: ['./navbarre.component.scss']
})
export class NavbarreComponent implements OnInit {

  toggleSignup:boolean = false;
  toggleMesFilm:boolean = false;

  constructor(private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
  }
  
  goToRoot() {
    this.router.navigate(["/"]);
  }

  showMenuSignup() {
    this.toggleSignup = !this.toggleSignup;
  }
  showMenuMesFilms() {
    this.toggleMesFilm = !this.toggleMesFilm;
  }
  toggleDeasapered() {
    this.toggleSignup = false;
    this.toggleMesFilm = false;
  }

}
