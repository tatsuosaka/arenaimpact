import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeSectionExhibitorsComponent } from './home-section-exhibitors/home-section-exhibitors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeNavComponent,
    HomeSectionComponent,
    HomeFooterComponent,
    HomeSectionExhibitorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
