import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { IlplFixtureComponent } from './ilpl-fixture/ilpl-fixture.component';
import { IlplResultsComponent } from './ilpl-results/ilpl-results.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { NextMatchComponent } from './next-match/next-match.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentPostComponent,
    IlplFixtureComponent,
    IlplResultsComponent,
    SeperatorComponent,
    NextMatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
