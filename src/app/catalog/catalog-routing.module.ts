import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

const catalogRoutes: Routes = [
  {path: "", component: CatalogComponent, children: [
    {path: "index.html", component: HomePageComponent}, 
    {path: "about.html", component: AboutPageComponent}, 
    {path: "contacts.html", component: ContactsPageComponent}, 
    {path: "editor.html", component: ProductEditorComponent}, 
    {path: "products/:category/:brand/:model", component: ProductDetailsComponent}, 
    {path: "products/:category", component: ProductsListComponent}, 
    {path: "products", redirectTo: "products/printers", pathMatch: "full"}, 
    {path: "", redirectTo: "index.html", pathMatch: "full"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(catalogRoutes)],
  exports: [RouterModule]
})

export class CatalogRoutingModule {}