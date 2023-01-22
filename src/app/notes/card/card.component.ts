import { Component, Input } from '@angular/core';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  faFileLines = faFileLines;

  @Input() Post: ScullyRoute = { route: '' };
}
