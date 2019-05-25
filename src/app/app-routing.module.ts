import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: "about.html", component: AboutMeComponent, data: {flag: "Yes"}}, 
  {path: "contacts.html", component: ContactsComponent}, 
  {path: "services.html", component: ServicesComponent}, 
  {path: "portfolio/catalog", loadChildren: './catalog/catalog.module#CatalogModule'}, 
  {path: "portfolio/index.html", component: PortfolioComponent}, 
  {path: "portfolio", redirectTo: "portfolio/index.html", pathMatch: "full"}, 
  {path: "", redirectTo: "about.html", pathMatch: "full"}, 
  {path: "**", redirectTo: "about.html"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}