import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filters-control',
  templateUrl: './filters-control.component.html',
  styleUrls: ['./filters-control.component.css']
})

export class FiltersControlComponent implements OnInit {

  @Input() options: {}[] = [];
  @Input() filters: {} = {};
  @Input() prices: number[] = [];
  @Input() total: number = 0;
  @Input() selected: number = 0;

  @Output() onChangeFilters = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChangeControls(form: NgForm) {
    let formValues = form.form.value;
    let filters = {};
    for (let key in formValues) {
      filters[key] = [];
      let values = formValues[key];
      for (let value in values) {
        if (values[value] === true) {
          filters[key].push(value);
        }
      }
    }
    filters["price"].push(formValues["price"]["min"]);
    filters["price"].push(formValues["price"]["max"]);
    for (let key in filters) {
      if (filters[key].length == 0) delete filters[key];
    }
    this.onChangeFilters.emit(filters);
  }

  clearFilters(filtersControlForm) {}

}