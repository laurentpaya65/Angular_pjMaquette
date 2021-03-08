import { Component, OnInit } from '@angular/core';
import {TvshowService} from '../../shared/services/tvshow.service';
import {TVShow} from '../../shared/models/tvshow.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  acteurs: number[] = [0,0,0,0,0,0];
  tvshow: TVShow;

  constructor(private ms:TvshowService) { }

  ngOnInit(): void {
    this.ms.getTvshowFromApi();
    this.ms.tvshow$.subscribe( data => {this.tvshow = data;
                                              console.log(this.tvshow)})


  }

}
