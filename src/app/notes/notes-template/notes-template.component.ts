import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-template',
  templateUrl: './notes-template.component.html',
  styleUrls: ['./notes-template.component.sass']
})
export class NotesTemplateComponent {
  slug: string = ''; 

  constructor(private meta: Meta, private route: ActivatedRoute) {
    meta.addTag({ name: 'description', content:'Notes and quick references for my favorite tools.' });
    
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
  }
}
