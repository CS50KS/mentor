import { Injectable } from '@angular/core';

@Injectable()

export class DataSortService {

  constructor() {}

  sortProductsByPrice(a, b): number {
    return a.price - b.price;
  }

  sortProductsByPriceReverce(a, b): number {
    return b.price - a.price;
  }

  sortProductsByRating(a, b): number {
    return b.rating - a.rating;
  }

  sortProductsByName(a, b): number {
    if (a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
    if (a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
    if (a.model.toLowerCase() < b.model.toLowerCase()) return -1;
    if (a.model.toLowerCase() > b.model.toLowerCase()) return 1;
    return 0;
  }

  sortProducts(products: Array<any>, direction: number) {
    switch (direction) {
        case 1:
            products.sort(this.sortProductsByPrice);
            break;
        case 2:
            products.sort(this.sortProductsByPriceReverce);
            break;
        case 3:
            products.sort(this.sortProductsByRating);
            break;
        default:
            products.sort(this.sortProductsByName);
    }
  }

}