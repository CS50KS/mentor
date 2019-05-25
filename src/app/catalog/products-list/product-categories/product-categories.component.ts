import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../../shared/services/data-base.service';
import { ProductCategory } from '../../shared/models/product-category.model';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})

export class ProductCategoriesComponent implements OnInit {

  productCategories: ProductCategory[] = [];

  constructor(
    private db: DataBaseService
  ) {}

  ngOnInit() {
    this.iniProductCategories();
  }

  iniProductCategories() {
    this.db.getDatas("product-categories").subscribe((datas: ProductCategory[]) => {
      this.productCategories = datas;
    });
  }

}