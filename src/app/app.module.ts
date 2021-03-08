import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarreComponent } from './accueil/navbarre/navbarre.component';
import { SearchbarreComponent } from './accueil/searchbarre/searchbarre.component';
import { AccueilcontentComponent } from './accueil/accueilcontent/accueilcontent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailboardComponent } from './detail/detailboard/detailboard.component';
import { CurseurComponent } from './utilities/curseur/curseur.component';
import { DescriptionComponent } from './detail/description/description.component';
import { IndicateursComponent } from './detail/indicateurs/indicateurs.component';
import { EtatserieComponent } from './utilities/etatserie/etatserie.component';
import { LoginComponent } from './signup/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { AccountComponent } from './signup/account/account.component';
import { MatButtonModule } from '@angular/material/button';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card'
import { ListfilmComponent } from './list/listfilm/listfilm.component';
import { ListSeriesComponent } from './list/list-series/list-series.component';
import { BoardComponent } from './signup/board/board.component';
import { NavigueComponent } from './signup/navigue/navigue.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarreComponent,
    SearchbarreComponent,
    AccueilcontentComponent,
    ListfilmComponent,
    DetailboardComponent,
    CurseurComponent,
    DescriptionComponent,
    IndicateursComponent,
    EtatserieComponent,
    LoginComponent,
    AccountComponent,
    ListSeriesComponent,
    BoardComponent,
    NavigueComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MdePopoverModule
   

  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi:true
      }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
