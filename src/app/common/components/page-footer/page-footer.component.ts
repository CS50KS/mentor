import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})

export class PageFooterComponent implements OnInit {

  isHiddenPageFooter: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.listenToTheRoute();
  }

  listenToTheRoute() {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.setIsHiddenPageFooter(evt.url);
      }
    });
  }

  setIsHiddenPageFooter(url: string): void {
    let urlSegments: string[] = url.split("/");
    let portfolioIndex: number = urlSegments.indexOf("portfolio");
    let isPortfolio: boolean = (portfolioIndex != -1) && (portfolioIndex != urlSegments.length - 1);
    this.isHiddenPageFooter = isPortfolio;
  }

}