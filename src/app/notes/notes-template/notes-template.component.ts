import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-template',
  templateUrl: './notes-template.component.html',
  styleUrls: ['./notes-template.component.sass']
})
export class NotesTemplateComponent {
  slug: string = ''; 

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
  }
}
