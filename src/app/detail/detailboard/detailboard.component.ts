import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailboard',
  templateUrl: './detailboard.component.html',
  styleUrls: ['./detailboard.component.scss']
})
export class DetailboardComponent implements OnInit {

  acteurs:number[] = [0,0,0,0,0,0];
  
  constructor() { }

  ngOnInit(): void {
  }

}
