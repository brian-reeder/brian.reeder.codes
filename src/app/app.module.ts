import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WindowComponent } from './window/window.component';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    WindowComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FontAwesomeModule,
    ScullyLibModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
