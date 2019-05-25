import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageHeaderComponent, 
    PageFooterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ], 
  exports: [
    PageHeaderComponent, 
    PageFooterComponent
  ]
})

export class AppCommonModule {}