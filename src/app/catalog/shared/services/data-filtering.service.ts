import { Injectable } from '@angular/core';

@Injectable()

export class DataFilteringService {

  constructor() {}

  filterProductsByPrice(products: Array<{}>, min: number, max: number) {
    return products.filter(product => {
      return product["price"] >= min && product["price"] <= max;
    });
  }

  filterProductsByValue(products: Array<{}>, category: string, value: string): Array<{}> {
    return products
      .slice()
      .filter(product => {
          return product[category] == value;
      })
  }

  filterProductsByCategory(products: Array<{}>, category: string, values: string[]): Array<{}> {
    if (values.length == 0) return products.slice();
    let result = [];
    values.forEach(value => {
        result = result.concat(this.filterProductsByValue(products, category, value));
    });
    return result;
  }

  interSect(alfa: Array<{}>, beta: Array<{}>): Array<{}> {
    return alfa.filter(el => beta.indexOf(el) != -1);
  }

  filterProducts(products: Array<{}>, filters: {}): Array<{}> {
    let result: Array<{}> = products.slice();
    let prices: number[] = filters["price"];
    delete filters["price"];
    result = this.filterProductsByPrice(result, prices[0], prices[1]);
    if (Object.keys(filters).length == 0) return result;

    let inter = [];
    for (let category in filters) {
        inter.push(this.filterProductsByCategory(result, category, filters[category]));
    };

    let len = inter.length;
    for (let i = 1; i < len; i++) {
        inter[i] = this.interSect(inter[i-1], inter[i]);
    };
    result = inter[len-1];
    
    return result;
  }

}