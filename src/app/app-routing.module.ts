import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilcontentComponent } from './accueil/accueilcontent/accueilcontent.component';
import { DetailboardComponent } from './detail/detailboard/detailboard.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'', component : AccueilcontentComponent},
  {path:'list' , component : ListComponent},
  {path:'detail', component : DetailboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
