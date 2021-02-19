import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  acteurs:number[] = [0,0,0,0,0,0];
  
  constructor() { }

  ngOnInit(): void {
  }

}
