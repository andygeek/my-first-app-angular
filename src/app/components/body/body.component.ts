import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {

  numerito : number;

  constructor() { 
    this.numerito = 10;
  }

  ngOnInit(): void {
  }

}
