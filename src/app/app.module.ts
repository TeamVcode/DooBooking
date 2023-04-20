import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomcataComponent } from './roomcata/roomcata.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { RoomService } from './room.service';
import { DeluxroomComponent } from './deluxroom/deluxroom.component';
import { SuperdelComponent } from './superdel/superdel.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomcataComponent,
    DeluxroomComponent,
    SuperdelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
