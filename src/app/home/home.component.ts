import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Banner:string='./assets/Banner3.png';
  Marvel:string='./assets/Marvel.png';
  Pok:string='./assets/pok.png';
  Rick:string='./assets/Rick.png';


  ngOnInit(): void {
  }

}
