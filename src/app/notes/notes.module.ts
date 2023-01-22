import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';

import { NavModule } from '../nav/nav.module';
import { WindowModule } from '../window/window.module';
import { NotesTemplateComponent } from './notes-template/notes-template.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    NotesComponent,
    NotesTemplateComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FontAwesomeModule,
    ScullyLibModule,
    NavModule,
    WindowModule,
  ]
})
export class NotesModule { }
