import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarFestComponent } from './car-fest.component';

const routes: Routes = [
  {path: "portfolio/car-fest.html", component: CarFestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CarFestRoutingModule {}