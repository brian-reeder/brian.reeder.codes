import { Component, Input } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'win-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.sass']
})
export class DirectoryComponent {
  @Input() pages: Observable<ScullyRoute[]> = new Observable;
  @Input() titleSelector: string = '';
  @Input() descriptionSelector: string = '';
}
