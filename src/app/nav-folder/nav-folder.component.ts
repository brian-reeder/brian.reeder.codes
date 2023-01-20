import { Component, Input } from '@angular/core';
import { faFolderOpen, faFolderClosed } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-nav-folder',
  templateUrl: './nav-folder.component.html',
  styleUrls: ['./nav-folder.component.sass']
})
export class NavFolderComponent {
  folder = faFolderClosed

  @Input() link: string = '/';
  @Input() selected: boolean = false;

  ngOnInit() {
    if(this.selected) {
      this.link = '/';
      this.folder = faFolderOpen;
    }
  }
}
