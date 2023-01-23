import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.sass']
})
export class BlogTemplateComponent {
  slug: string = ''; 

  constructor(private meta: Meta,private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;

    meta.addTag({ name: 'description', content:'My list of Cyber Security and Software Engineering blog posts.' });
  }
}
