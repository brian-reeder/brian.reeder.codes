import { Component, Input } from '@angular/core';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'win-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.sass']
})
export class ShortcutComponent {
  faFileLines = faFileLines;
  @Input() Post: ScullyRoute = { route: '' };
  @Input() titleSelector: string = '';
  @Input() descriptionSelector: string = '';
}
