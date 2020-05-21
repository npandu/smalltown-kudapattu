import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './layout/nav/nav.component';
import { MainContentComponent } from './views/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { OurStoryComponent } from './views/our-story/our-story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainContentComponent,
    FooterComponent,
    OurStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
