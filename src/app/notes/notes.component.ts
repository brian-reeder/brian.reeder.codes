import { Component, OnInit } from '@angular/core';

import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, map,  } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  links$: Observable<ScullyRoute[]>; 

  constructor( private scully: ScullyRoutesService ) {
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
