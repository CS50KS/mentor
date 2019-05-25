import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewsSettings } from '../../shared/models/views-settings.model';

@Component({
  selector: 'app-views-control',
  templateUrl: './views-control.component.html',
  styleUrls: ['./views-control.component.css']
})

export class ViewsControlComponent implements OnInit {

  @Output() onChangeViews = new EventEmitter<ViewsSettings>();

  sortingControls: Array<{value: number, option: string}> = [
    {value: 1, option: "Сперва дешевле"}, 
    {value: 2, option: "Сперва дороже"}, 
    {value: 3, option: "По популярности"}, 
    {value: 4, option: "По наименованию"}
  ];

  paginationControls: Array<{value: number, option: string}> = [
    {value: 3, option: "по 3"}, 
    {value: 6, option: "по 6"}, 
    {value: 9, option: "по 9"}, 
    {value: 0, option: "все"}
  ];

  viewControls: Array<{status: boolean, value: string}> = [
    {status: true, value: "grid"}, 
    {status: false, value: "list"}
  ];

  constructor() {}

  ngOnInit() {}

  sendViewsSettings(form: NgForm): void {
    let settings = new ViewsSettings(
      +form.form.value.sorting, 
      +form.form.value.capacity, 
      form.form.value.view
    );
    this.onChangeViews.emit(settings);
  }

}