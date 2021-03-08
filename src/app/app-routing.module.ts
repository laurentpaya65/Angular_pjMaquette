import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilcontentComponent } from './accueil/accueilcontent/accueilcontent.component';
import { DetailboardComponent } from './detail/detailboard/detailboard.component';
import { ListSeriesComponent } from './list/list-series/list-series.component';
import { ListfilmComponent } from './list/listfilm/listfilm.component';
import { AccountComponent } from './signup/account/account.component';
import { LoginComponent } from './signup/login/login.component';
import {BoardComponent} from './signup/board/board.component';


const routes: Routes = [
  {path:'', component : AccueilcontentComponent},
  {path:'listfilm' , component : ListfilmComponent},
  {path:'listSeries' , component : ListSeriesComponent },
  {path:'detail', component : DetailboardComponent},
  {
    path:'board',
    component : BoardComponent,
    children: [
      {path:'login',component : LoginComponent},
      {path:'account',component : AccountComponent}
      ]
    },





];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
