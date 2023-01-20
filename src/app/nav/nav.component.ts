import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFolderOpen, faFolderClosed } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  faFolderOpen = faFolderOpen;
  faFolderClosed = faFolderClosed;
  path?:string;

  folders: {[key: string]: IconDefinition} = {
    "about-me": faFolderClosed,
    "blog": faFolderClosed,
    "notes": faFolderClosed
  };

  constructor( private route: ActivatedRoute) {}

  ngOnInit() {
    this.path = this.route.snapshot.routeConfig?.path as string;
    if(this.path !== undefined && this.path in this.folders) {
      this.folders[this.path] = faFolderOpen
    }
  }
}
