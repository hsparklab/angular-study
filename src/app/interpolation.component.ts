import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  //styleUrls: ['./interpolation.component.scss']
  styles: ['.my-italic {font-style:italic;}']
})
export class InterpolationComponent implements OnInit {
  basket = {
    items: ['apple', 'grape', 'orange']
  };
  goodbye: string;
  myclass = "my-italic";

  constructor() {
    let x: string = '굿';
    let y: string = '바이';
    this.goodbye = '${x+y}';//${x}+${y};

  }

  ngOnInit(): void {
  }

  hello(){
    return "hello";
  }

}
