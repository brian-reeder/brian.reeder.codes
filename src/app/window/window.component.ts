import { Component, Input } from '@angular/core';
import { faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent {
  faCircle = faCircle;
  faCircleXmark = faCircleXmark;

  @Input() title: string = '';
}
