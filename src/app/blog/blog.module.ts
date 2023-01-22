import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { NavModule } from '../nav/nav.module';
import { WindowModule } from '../window/window.module';
import { BlogTemplateComponent } from './blog-template/blog-template.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogTemplateComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FontAwesomeModule,
    ScullyLibModule,
    NavModule,
    WindowModule,
  ]
})
export class BlogModule { }
