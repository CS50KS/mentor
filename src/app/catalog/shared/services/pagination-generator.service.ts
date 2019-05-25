import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination.model';

@Injectable()

export class PaginationGeneratorService {

  constructor() {}

  getNumberOfPages(numberOfProducts: number, pageSize: number): number {
    if (pageSize == 0) return 1;
    const numberOfPages = (numberOfProducts % pageSize) ? Math.trunc(numberOfProducts / pageSize) + 1 : numberOfProducts / pageSize;
    return numberOfPages;
  }

  getArrayOfPages(numberOfPages: number, pageSize: number): Pagination[] {
    const arrayOfPages: Pagination[] = [];
    if (numberOfPages == 1) {
      const pagin: Pagination = new Pagination(0, null, true);
      arrayOfPages.push(pagin);
      return arrayOfPages;
    };
    for (let i = 0; i < numberOfPages; i++) {
      const pagin: Pagination = new Pagination(i*pageSize, (i+1)*pageSize, false);
      arrayOfPages.push(pagin);
    };
    arrayOfPages[0].active = true;
    return arrayOfPages;
  }

  getIndexOfActivePage(arrayOfPages: Pagination[]): number {
    let index = arrayOfPages.findIndex(page => page.active);
    if (index == -1) index = 0;
    return index;
  }

  changeStatusOfActivePage(arrayOfPages: Pagination[], indexOfSelectedPage: number | string): void {
    let indexOfActivePage: number = this.getIndexOfActivePage(arrayOfPages);
    arrayOfPages[indexOfActivePage].active = false;
    if (indexOfSelectedPage == "prev" && indexOfActivePage > 0) {
      arrayOfPages[indexOfActivePage - 1].active = true;
      return;
    }; 
    if (indexOfSelectedPage == "next" && indexOfActivePage < (arrayOfPages.length - 1)) {
      arrayOfPages[indexOfActivePage + 1].active = true;
      return;
    }; 
    arrayOfPages[indexOfSelectedPage].active = true;
  }

}