import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
 userSelection:string
  constructor() { 
    this.userSelection="home";
  }
getColor(){
  if(this.userSelection=="tour"){
    return 'red';
  }
  else if(this.userSelection=="flight"){
    return 'green';
  }
  else if(this.userSelection=="car"){
    return 'orange';
  }
  else if(this.userSelection=="bike"){
    return 'purple';
  }
  else{
    return 'skyblue';
  }
}
  ngOnInit() {
  }

}
