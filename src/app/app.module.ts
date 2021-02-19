import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarreComponent } from './accueil/navbarre/navbarre.component';
import { SearchbarreComponent } from './accueil/searchbarre/searchbarre.component';
import { AccueilcontentComponent } from './accueil/accueilcontent/accueilcontent.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailboardComponent } from './detail/detailboard/detailboard.component';
import { CurseurComponent } from './utilities/curseur/curseur.component';
import { DescriptionComponent } from './detail/description/description.component';
import { IndicateursComponent } from './detail/indicateurs/indicateurs.component';
import { EtatserieComponent } from './utilities/etatserie/etatserie.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarreComponent,
    SearchbarreComponent,
    AccueilcontentComponent,
    ListComponent,
    DetailboardComponent,
    CurseurComponent,
    DescriptionComponent,
    IndicateursComponent,
    EtatserieComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
