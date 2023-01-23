import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, map,  } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  links$: Observable<ScullyRoute[]>; 
  //= this.scully.available$.subscribe((links) => {
  //  links.filter(link => link.route.startsWith('/blog'));
  //});

  constructor( private meta: Meta, private scully: ScullyRoutesService ) {
    meta.addTag({ name: 'description', content:'My list of Cyber Security and Software Engineering blog posts.' });

    this.links$ = this.scully.available$.pipe(
      map(links => links
        .filter(link => link.route.startsWith('/blog/'))
        .sort((a, b) => b['date'].localeCompare(a['date']))
      )
    );
  }

  ngOnInit(): void {
    // debug current pages
    /*
    this.links$.subscribe((links) => {
      console.log(links)
    });
    */
  }
}
