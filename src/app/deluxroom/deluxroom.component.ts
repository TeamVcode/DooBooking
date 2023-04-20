import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-deluxroom',
  templateUrl: './deluxroom.component.html',
  styleUrls: ['./deluxroom.component.css']
})
export class DeluxroomComponent  implements OnInit {

  delRoom:any[]=[]

  Delux:any[]=[]
constructor(private Myservice:RoomService){}


ngOnInit(): void {
  

  this.delRoom= this.Myservice.getDel()

  console.log(this.delRoom);
  
}




}





