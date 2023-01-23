import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { WindowRoutingModule } from './window-routing.module';
import { WindowComponent } from './window.component';
import { DirectoryComponent } from './directory/directory.component';
import { ShortcutComponent } from './shortcut/shortcut.component';


@NgModule({
  declarations: [
    WindowComponent,
    DirectoryComponent,
    ShortcutComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FontAwesomeModule,
    ScullyLibModule,
    WindowRoutingModule
  ],
  exports: [
    WindowComponent,
    DirectoryComponent
  ]
})
export class WindowModule { 
  
}
