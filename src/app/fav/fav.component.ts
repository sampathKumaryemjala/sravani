import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
like:boolean;
  constructor() {
    this.like=false;
   }

  ngOnInit() {
  }

}
