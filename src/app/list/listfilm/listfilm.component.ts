import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listfilm',
  templateUrl: './listfilm.component.html',
  styleUrls: ['./listfilm.component.scss']
})
export class ListfilmComponent implements OnInit {

  displayedColumns: string[] = ['titre', 'statut', 'note', 'priorite', 'image'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    this.dataSource.paginator = this.paginator;
  }

  constructor(private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
  }
  goToDetail() {
    this.router.navigate(["detail"]);
  }


}
// ************************************************************
//    Element à mettre en MODEL
// ************************************************************
export interface PeriodicElement {
  titre: string;
  statut: string;
  note: string;
  priorite: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
  {titre: 'Game of thrones', statut: 'Déjà vu', note: 'pas mal', priorite: 'à revoir'},
];
