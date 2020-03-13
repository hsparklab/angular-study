import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {
  text = "안녕하세요";
  weight="normal";
  style="normal";
  constructor() { }

  ngOnInit(): void {
  }

  changeWeight($event:any){
    this.weight = $event.target.checked?"bold":"normal";
  }
}
