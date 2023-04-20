import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  rooms:any[]=[
     
    {id:101,size:'30ft',capacity:'Max person 3',money:5000, bed: 'King Beds',status:'Available', services:'Wifi,Television,...' ,catagory:'delux',image:'../assets/roomsimages/deltwo.jpg'},
    {id:102, size:'30ft',capacity:'Max person 5',money:4000, bed:'King Beds', status:'Unavailble',services:'Wifi,Television,...', catagory:'delux',image:'assets/roomsimages/delfive.jpg'},
    {id:103, size:'30ft',capacity:'Max Person 3',money:2000,bed:'King Beds',status:'Available',services:'Wifi,Television,...', catagory:'delux',image:'assets/roomsimages/delfour.jpg'},
    {id:104,size:'40ft',capacity:'Max Person 4',money:8000,bed:'Queen Beds', status:'Unavailble',services:'Wifi,Television,...' ,catagory:'delux',image:'assets/roomsimages/delone.jpg'},
    {id:106,size:'20ft',capacity:'Max person 2',money:15000,bed:'Twin Room', status:'Unavailble',services:'Wifi,Television,...',catagory:'super',image:'assets/roomsimages/superone.jpg'},
    {id:107,size:'20ft',capacity:'Max Person 2',money:25000,bed:'Twin Room',status:'Available',services:'Wifi,Television,...',catagory:'super',image:'assets/roomsimages/supertwo.jpg'},
    {id:108,size:'20ft',capacity:'Max Person 2',money:35000,bed:'Twin Room', status:'Unavailble',services:'Wifi,Television,...',catagory:'super',image:'assets/roomsimages/superthree.jpg'},
    {id:109,size:'20ft',capacity:'Max person 2',money:45000,bed:'Twin Room',status:'Available',services:'Wifi,Television,...',catagory:'super',image:'assets/roomsimages/superfour.jpg'},

  ]


     
get(){

return this.rooms

}


getDel(){

return this.rooms.filter(x =>x.catagory === 'delux');

}

getSup(){

  return this.rooms.filter(x=> x.catagory ==='super');

}



}
