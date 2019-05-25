import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CatalogRoutingModule } from './catalog-routing.module';

import { DataBaseService } from './shared/services/data-base.service';
import { DataSortService } from './shared/services/data-sort.service';
import { DataFilteringService } from './shared/services/data-filtering.service';
import { FiltersGeneratorService } from './shared/services/filters-generator.service';
import { PaginationGeneratorService } from './shared/services/pagination-generator.service';

import { CatalogComponent } from './catalog.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductCategoriesComponent } from './products-list/product-categories/product-categories.component';
import { StatusBarComponent } from './products-list/status-bar/status-bar.component';
import { ProductsViewboxComponent } from './products-list/products-viewbox/products-viewbox.component';
import { ViewsControlComponent } from './products-list/views-control/views-control.component';
import { FiltersControlComponent } from './products-list/filters-control/filters-control.component';
import { PagesControlComponent } from './products-list/pages-control/pages-control.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';

@NgModule({
  declarations: [
    CatalogComponent, 
    ProductsListComponent, 
    ProductDetailsComponent, 
    ProductEditorComponent, 
    ProductCategoriesComponent, 
    StatusBarComponent, 
    ProductsViewboxComponent, 
    ViewsControlComponent, 
    FiltersControlComponent, 
    PagesControlComponent, 
    HomePageComponent, 
    AboutPageComponent, 
    ContactsPageComponent, 
    PageHeaderComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule, 
    CatalogRoutingModule
  ], 
  providers: [
    DataBaseService, 
    DataSortService, 
    DataFilteringService, 
    FiltersGeneratorService, 
    PaginationGeneratorService
  ]
})

export class CatalogModule {}