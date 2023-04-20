import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomcata',
  templateUrl: './roomcata.component.html',
  styleUrls: ['./roomcata.component.css']
})
export class RoomcataComponent {


  constructor(private route:Router){}

  

  goDe(){

    this.route.navigateByUrl('delux')

  }

  goSu(){


    this.route.navigateByUrl('super')
  }
  

}
  




