import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { IlplFixtureComponent } from './ilpl-fixture/ilpl-fixture.component';
import { IlplResultsComponent } from './ilpl-results/ilpl-results.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentPostComponent,
    IlplFixtureComponent,
    IlplResultsComponent
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
