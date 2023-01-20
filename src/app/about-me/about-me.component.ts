import { Component } from '@angular/core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent {
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;
  faSquareEnvelope = faSquareEnvelope;
}
