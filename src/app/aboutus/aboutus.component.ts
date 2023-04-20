import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {


  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  sub(){
this.route.navigateByUrl("home")
  }

}