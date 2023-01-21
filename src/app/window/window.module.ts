import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WindowRoutingModule } from './window-routing.module';
import { WindowComponent } from './window.component';


@NgModule({
  declarations: [
    WindowComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FontAwesomeModule,
    WindowRoutingModule
  ],
  exports: [
    WindowComponent
  ]
})
export class WindowModule { }
