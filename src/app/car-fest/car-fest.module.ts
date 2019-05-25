import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarFestRoutingModule } from './car-fest-routing.module';

import { CarFestComponent } from './car-fest.component';
import { CarFestHeaderComponent } from './car-fest-header/car-fest-header.component';
import { CarFestFooterComponent } from './car-fest-footer/car-fest-footer.component';
import { CarFestMainComponent } from './car-fest-main/car-fest-main.component';

@NgModule({
  declarations: [CarFestComponent, CarFestHeaderComponent, CarFestFooterComponent, CarFestMainComponent],
  imports: [
    CommonModule,
    CarFestRoutingModule
  ], 
  exports: []
})

export class CarFestModule {}