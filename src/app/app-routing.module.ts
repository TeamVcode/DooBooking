import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeluxroomComponent } from './deluxroom/deluxroom.component';
import { RoomcataComponent } from './roomcata/roomcata.component';
import { SuperdelComponent } from './superdel/superdel.component';

const routes: Routes = [

  {path:'',component:RoomcataComponent},
  {path:'room',component:RoomcataComponent},
{path:'delux',component:DeluxroomComponent},

{path:'super',component:SuperdelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
