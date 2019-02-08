import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavDrawerComponent } from './landing/nav-drawer/nav-drawer.component';
import { AppGalleryComponent } from './landing/app-gallery/app-gallery.component';
import { WebApplicationComponent } from './landing/web-application/web-application.component';
import { TeamComponent } from './landing/team/team.component';
import { KickstarterComponent } from './landing/kickstarter/kickstarter.component';
import { ChartsComponent } from './landing/charts/charts.component';
import { InfymakerComponent } from './landing/infymaker/infymaker.component';
import { StoryComponent } from './landing/story/story.component';
import { TestimonialComponent } from './landing/testimonial/testimonial.component';
import { WorkingComponent } from './landing/working/working.component';
import { FeaturesComponent } from './landing/features/features.component';
import { OutgrowComponent } from './landing/outgrow/outgrow.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavDrawerComponent,
    AppGalleryComponent,
    WebApplicationComponent,
    TeamComponent,
    KickstarterComponent,
    ChartsComponent,
    InfymakerComponent,
    StoryComponent,
    TestimonialComponent,
    WorkingComponent,
    FeaturesComponent,
    OutgrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
