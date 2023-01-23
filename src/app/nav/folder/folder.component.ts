import { Component, Input } from '@angular/core';
import { faFolderOpen, faFolderClosed } from '@fortawesome/free-regular-svg-icons';
import { faFilePdf, faFolder } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.sass']
})
export class FolderComponent {
  folder = faFolderClosed

  @Input() link: string = '/';
  @Input() selected: boolean = false;

  ngOnInit() {
    if(this.selected) {
      this.link = '/';
      this.folder = faFolderOpen;
    }
  }

  setFolderOpen() {
    this.folder = faFolderOpen
  }

  setFolderClosed() {
    this.folder = faFolderClosed
  }
}
