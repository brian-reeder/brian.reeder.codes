import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { FolderComponent } from './folder/folder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavRoutingModule } from './nav-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';


@NgModule({
  declarations: [
    BarComponent,
    FolderComponent
  ],
  imports: [
    NavRoutingModule,
    CommonModule,
    ScullyLibModule,
    FontAwesomeModule
  ],
  exports: [
    BarComponent
  ]
})
export class NavModule { }
