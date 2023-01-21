import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

//import { AppModule } from '../app.module';
import { NavModule } from '../nav/nav.module';
import { WindowModule } from '../window/window.module';
import { BlogTemplateComponent } from './blog-template/blog-template.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogTemplateComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
//    AppModule,
    NavModule,
    WindowModule,
  ]
})
export class BlogModule { }
