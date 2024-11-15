import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent	 } from './components/card/card/card.component';
import { BigCardComponent } from './components/big_card/big-card/big-card.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';

export const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'content/:id',
    component:BigCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }