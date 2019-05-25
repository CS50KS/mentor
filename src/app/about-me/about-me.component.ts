import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent {

  isShow: boolean = false;
  buttonTitle: string = "Больше информации";

  constructor(
    private router: Router
  ) {}

  // Go To Products List Page
  goToProductsListPage() {
    this.router.navigate(['portfolio', 'catalog']);
  }

  showMoreInfo(element: HTMLDivElement) {
    this.isShow = !this.isShow;
    this.buttonTitle = this.isShow ? "Скрыть детали" : "Больше информации";
    if (this.isShow) {
      setTimeout(() => {
        window.scrollBy(0, element.clientHeight);
      }, 100);
    }
  }

}