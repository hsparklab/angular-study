import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {
  public isActive:boolean = false;
  public myclass: string = "active";

  constructor() { }

  ngOnInit(): void {
  }

}
