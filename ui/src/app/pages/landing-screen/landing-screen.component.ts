import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {
  testingArray: any[] = ["1","2","3","4"]
  constructor() { }

  ngOnInit(): void {
  }

}
