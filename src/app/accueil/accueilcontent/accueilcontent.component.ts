import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueilcontent',
  templateUrl: './accueilcontent.component.html',
  styleUrls: ['./accueilcontent.component.scss']
})
export class AccueilcontentComponent implements OnInit {

  constructor() { }

  filmsPop:number[] =[0,0,0,0,0,0] ;
  seriesPop:number[] =[0,0,0,0,0,0] ;

  ngOnInit(): void {
  }

}
