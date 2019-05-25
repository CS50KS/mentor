import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { isNumber } from 'util';
import { DataBaseService } from '../shared/services/data-base.service';
import { DataSortService } from '../shared/services/data-sort.service';
import { DataFilteringService } from '../shared/services/data-filtering.service';
import { FiltersGeneratorService } from '../shared/services/filters-generator.service';
import { PaginationGeneratorService } from '../shared/services/pagination-generator.service';
import { Pagination } from '../shared/models/pagination.model';
import { ViewsSettings } from '../shared/models/views-settings.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  // PRODUCTS LIST COMPONENT
  public isReady: boolean = false;

  // PRODUCTS PROPERTIES
  public productsCategory: string = "";
  private _products: {}[] = [];
  public productsSize: number = 0;
  public productsList: {}[] = [];
  public productsListSize: number = 0;
  public productsListForViewbox: {}[] = [];

  // VIEWS CONTROL PROPERTIES
  public sorting: number;
  public capacity: number;
  public view: string;

  // FILTERS CONTROL PROPERTIES
  public filteringOptions: [] = [];
  public filtersForProduct: {} = {};
  public priceRange: number[] = [];
  public currentFilters: {} = {};

  // PAGES CONTROL PROPERTIES
  public numberOfPages: number = 1;
  public arrayOfPages: Pagination[] = [];

  constructor(
    private route: ActivatedRoute, 
    private db: DataBaseService, 
    private ds: DataSortService, 
    private df: DataFilteringService, 
    private fg: FiltersGeneratorService, 
    private pg: PaginationGeneratorService
  ) {}

  ngOnInit() {
    this.iniViewsControlProperties();
    this.listenToTheRoute();
  }

  // Activated Route Listener

  listenToTheRoute() {
    this.route.paramMap.forEach((param: ParamMap) => {
      this.isReady = false;
      this.productsCategory = param.get("category");

      combineLatest(
        this.db.getDatas("filtering-options"), 
        this.db.getDatas(this.productsCategory)
      ).subscribe(datas => {
        this.filteringOptions = datas[0][this.productsCategory];
        this.products = datas[1];
        this.filtersForProduct = this.fg.getFiltersForProduct(this.products, this.filteringOptions);
        this.priceRange = this.fg.getPriceRange(this.products);
        this.refreshProductsList();
        this.refreshProductsListForViewbox()
        this.isReady = true;
      });

    });
  }

  // PRODUCTS METHODS

  get products(): {}[] {
    return this._products.slice();
  }

  set products(datas) {

    // Подумать, как выполнить проверку данных
    let valid = datas.every(data => isNumber(data["id"]) && isNumber(data["price"]));
    this._products = valid ? datas : [];
    this.productsSize = this._products.length;
  }

  // PRODUCTS LIST METHODS

  refreshProductsList(): void {
    let tmp = this.products;
    this.ds.sortProducts(tmp, this.sorting);
    this.productsList = tmp;
    this.productsListSize = this.productsList.length;
  }

  // VIEWS CONTROL METHODS

  iniViewsControlProperties(): void {
    this.sorting = 1;
    this.capacity = 3;
    this.view = "grid";
  }

  applyViewsSettings(settings: ViewsSettings) {
    if (this.view != settings.view) this.view = settings.view;
    if (this.sorting != settings.sorting) {
      this.sorting = settings.sorting;
      this.ds.sortProducts(this.productsList, this.sorting);
    };
    if (this.capacity != settings.capacity) {
      this.capacity = settings.capacity;
      this.refreshProductsListForViewbox();
    };
  };

  // FILTERS CONTROL METHODS

  applyFilters(filters: {}) {
    this.currentFilters = filters;
    let tmp: any = this.df.filterProducts(this.products, filters);
    this.ds.sortProducts(tmp, this.sorting);
    this.productsList = tmp;
    this.productsListSize = this.productsList.length;
    this.refreshProductsListForViewbox();
  }

  // PAGES CONTROL METHODS

  changeActivePage(index: number | string) {
    this.pg.changeStatusOfActivePage(this.arrayOfPages, index);
    this.productsListForViewbox = this.getProductsListForViewbox();
  }

  getProductsListForViewbox(): Array<{}> {
    if (this.numberOfPages == 1) return this.productsList;
    const activePage: number = this.pg.getIndexOfActivePage(this.arrayOfPages);
    return this.productsList.slice(this.arrayOfPages[activePage].from, this.arrayOfPages[activePage].to);
  }

  refreshProductsListForViewbox() {
    this.numberOfPages = this.pg.getNumberOfPages(this.productsListSize, this.capacity);
    this.arrayOfPages = this.pg.getArrayOfPages(this.numberOfPages, this.capacity);
    this.productsListForViewbox = this.getProductsListForViewbox();
  }

}