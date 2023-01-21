import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { FolderComponent } from './folder/folder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    BarComponent,
    FolderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BarComponent
  ]
})
export class NavModule { }
