import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etatserie',
  templateUrl: './etatserie.component.html',
  styleUrls: ['./etatserie.component.scss']
})
export class EtatserieComponent implements OnInit {

  nbEpisodeTot = 15;
  nbSaisonTot = 5;
  saisons:EtatSaison[] = [];

  constructor() { }

  ngOnInit(): void {
    let nbEpisode;
    for (let i=1 ; i<this.nbSaisonTot+1;i++) {
      let etatSaison:EtatSaison = {numSaison:i,episodes:[]};

      nbEpisode = Math.round( Math.random() * this.nbEpisodeTot);
      console.log("saison n° "+i+" a "+nbEpisode+" sur "+this.nbEpisodeTot)
      for (let j=1 ; j<this.nbEpisodeTot+1 ; j++) {
        let etatEpisode = {episode:j,presence:false,statut:false};
               
        if (j < nbEpisode+1) {
          etatEpisode.presence = true;
        } else {
          etatEpisode.presence = false;
        }
        let episodeVu = Math.random() * 2;
        if (episodeVu < 1) {
          etatEpisode.statut = true;
        } else {
          etatEpisode.statut = false;
        }
        etatSaison.episodes.push(etatEpisode);
      }
      this.saisons.push(etatSaison);
     
    }
    console.log(this.saisons);
  }

  tagEpisode(numSaison,numEpisode) {
    console.log("saison n°"+numSaison+" - episode n°"+numEpisode);
    
    for (let j=0 ; j<this.saisons[numSaison-1].episodes.length ; j++) {
      if (j<numEpisode) {
        this.saisons[numSaison-1].episodes[j].statut = true;
      } else {
        this.saisons[numSaison-1].episodes[j].statut = false;
      }
      console.log("saison n°"+numSaison+" - episode n°"+numEpisode);
    }
  }
}
export interface EtatSaison {
  numSaison: number;
  episodes: EtatEpisode[];
}

export interface EtatEpisode {
  episode: number;
  presence: boolean;
  statut: boolean;
}
