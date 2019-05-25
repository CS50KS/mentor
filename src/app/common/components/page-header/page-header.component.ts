import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})

export class PageHeaderComponent implements OnInit {

  isFrontPageLoaded: boolean = false;
  isHiddenPageHeader: boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listenToTheRoute();
  }

  listenToTheRoute() {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        let datas: string;
        datas = this.route.root.firstChild.snapshot.data["flag"];
        this.isFrontPageLoaded = (datas == "Yes");
        this.setIsHiddenPageHeader(evt.url);
      }
    });
  }

  setIsHiddenPageHeader(url: string): void {
    let urlSegments: string[] = url.split("/");
    let portfolioIndex: number = urlSegments.indexOf("portfolio");
    let isPortfolio: boolean = (portfolioIndex != -1) && (portfolioIndex != urlSegments.length - 1);
    this.isHiddenPageHeader = isPortfolio;
  }

}