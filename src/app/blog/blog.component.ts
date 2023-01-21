import { Component, OnInit } from '@angular/core';

import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor( private scully: ScullyRoutesService ) {}

  ngOnInit(): void {
    // debug current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }
}
