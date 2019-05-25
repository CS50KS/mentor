import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'], 
  inputs: ["category", "total", "selected", "prices", "filters"]
})

export class StatusBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}