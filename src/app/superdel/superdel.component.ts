import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-superdel',
  templateUrl: './superdel.component.html',
  styleUrls: ['./superdel.component.css']
})
export class SuperdelComponent implements OnInit {


  SuperDelux:any[]=[]

  constructor(private Myservice:RoomService){}

ngOnInit(): void {
  
this.SuperDelux =this.Myservice.getSup()



}
}




