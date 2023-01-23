import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { faFolderOpen, faFolderClosed } from '@fortawesome/free-regular-svg-icons';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'nav-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {
  faFolderOpen = faFolderOpen;
  faFolderClosed = faFolderClosed;
  path?:string;

  pages: {[key: string]: string}[] = [
    { title:"About Me", path:"/about-me"},
    { title:"Blog", path: "/blog"},
    { title:"Notes", path: "/notes"},
  ]
  constructor( private router: Router, private scully: ScullyRoutesService) {}

  ngOnInit() {
    let current$ = this.scully.getCurrent().subscribe(x => {
      this.path = x.route;
    });

  }
}
