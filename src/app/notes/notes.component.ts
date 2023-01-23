import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, map,  } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  links$: Observable<ScullyRoute[]>; 

  constructor( private meta: Meta, private scully: ScullyRoutesService ) {
    meta.addTag({ name: 'description', content:'Notes and quick references for my favorite tools.' });

    this.links$ = this.scully.available$.pipe(
      map(links => links
        .filter(link => link.route.startsWith('/notes/'))
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
