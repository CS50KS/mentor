import { Injectable } from '@angular/core';

@Injectable()

export class FiltersGeneratorService {

  constructor() {}

  getPriceRange(products: Array<{}>): number[] {
    let priceRange: number[] = [];
    let prices: number[] = products.map(product => product["price"]);
    priceRange.push(Math.min(...prices));
    priceRange.push(Math.max(...prices));
    return priceRange;
  }

  getFiltersForProduct(products: Array<{}>, options: Array<{}>): Object {
    let filteringOptions: {} = {};
    options.forEach(option => {
      let key = option["option"];
      filteringOptions[key] = this.getOptionValues(products, key);
    });
    return filteringOptions;
  }

  getOptionValues(products: Array<{}>, option: string): string[] {
    let values: {} = {};
    products.forEach(product => {
      let key = product[option];
      values[key] = true;
    });
    return Object.keys(values).sort();
  }

}