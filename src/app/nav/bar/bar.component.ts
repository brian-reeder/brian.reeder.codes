import { Component, OnInit } from '@angular/core';
import { PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFolderOpen, faFolderClosed } from '@fortawesome/free-regular-svg-icons';

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
    { title:"About Me", path:"about-me"},
    { title:"Blog", path: "blog"},
    { title:"Notes", path: "notes"},
  ]
  constructor( private router: Router) {}

  ngOnInit() {
    this.path = '';
    const url: string = this.router.url;
    const tree: UrlTree = this.router.parseUrl(url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g?.segments ?? [];
    if(s.length > 0) {
      this.path = s[0].path
    }
  }
}
