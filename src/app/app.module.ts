import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToursComponent } from './tours/tours.component';
import { TourComponent } from './tour/tour.component';
import { FavComponent } from './fav/fav.component';


@NgModule({
  declarations: [
    AppComponent,
    ToursComponent,
    TourComponent,
    FavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
