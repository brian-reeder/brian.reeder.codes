import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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

  constructor(private meta: Meta) {
    meta.addTag({ name: 'description', content:'Everything to know about Brian.' })
  }

}
