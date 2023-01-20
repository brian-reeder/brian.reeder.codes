import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WindowComponent } from './window/window.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavComponent } from './nav/nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavFolderComponent } from './nav-folder/nav-folder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    WindowComponent,
    NavComponent,
    AboutMeComponent,
    NavFolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
