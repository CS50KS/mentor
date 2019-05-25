import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Pagination } from '../../shared/models/pagination.model';
import { PaginationGeneratorService } from '../../shared/services/pagination-generator.service';

@Component({
  selector: 'app-pages-control',
  templateUrl: './pages-control.component.html',
  styleUrls: ['./pages-control.component.css']
})

export class PagesControlComponent implements OnInit, OnChanges {

  @Input("pages") pages: Pagination[] = [];

  @Output() onPageSelected = new EventEmitter<number | string>();

  prevButtonDisabledStatus: boolean = true;
  nextButtonDisabledStatus: boolean = false;

  constructor(
    private pg: PaginationGeneratorService
  ) {}

  ngOnChanges() {
    this.prevButtonDisabledStatus = this.getPrevButtonDisabledStatus();
    this.nextButtonDisabledStatus = this.getNextButtonDisabledStatus();
  }

  ngOnInit() {}

  onClick(evt: Event, index: number | string) {
    evt.preventDefault();
    this.onPageSelected.emit(index);
    this.prevButtonDisabledStatus = this.getPrevButtonDisabledStatus();
    this.nextButtonDisabledStatus = this.getNextButtonDisabledStatus();
  }

  getPrevButtonDisabledStatus(): boolean {
    return this.pg.getIndexOfActivePage(this.pages) == 0;
  }

  getNextButtonDisabledStatus(): boolean {
    return this.pg.getIndexOfActivePage(this.pages) == this.pages.length - 1;
  }

}