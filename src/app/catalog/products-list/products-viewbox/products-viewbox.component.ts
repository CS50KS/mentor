import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-viewbox',
  templateUrl: './products-viewbox.component.html',
  styleUrls: ['./products-viewbox.component.css']
})

export class ProductsViewboxComponent implements OnInit {

  @Input() category: string = "";
  @Input() products: Array<{}> = [];
  @Input() view: string = "";

  constructor() {}

  ngOnInit() {}

}