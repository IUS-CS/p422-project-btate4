import { Component, OnInit } from '@angular/core';
import { mockData } from '../../../Data-Classes/mockData';
import { GenericProduct } from '../../../Data-Classes/dataStructures';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.css']
})
export class ProductsScreenComponent implements OnInit {
  testingArray: GenericProduct[] = mockData;
  constructor() { }

  ngOnInit(): void {
    console.log("testingARray", this.testingArray);
  }

}
