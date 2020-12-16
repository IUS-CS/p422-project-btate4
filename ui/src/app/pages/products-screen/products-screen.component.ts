import { Component, OnInit } from '@angular/core';
import { ProductsService, ViewStatus } from './products-screen.service';

@Component({
  selector: 'app-products-screen',
  templateUrl: './products-screen.component.html',
  styleUrls: ['./products-screen.component.css']
})
export class ProductsScreenComponent implements OnInit {
  ViewStatus = ViewStatus;
  viewStatus: ViewStatus = ViewStatus.TOPS; // defaults to tops view
  constructor() { }

  ngOnInit(): void {}

  
  handleView(productView:ViewStatus):void {
    if(productView === ViewStatus.TOPS){
      this.viewStatus = ViewStatus.TOPS
    } 
    if(productView === ViewStatus.BOTTOMS){
      this.viewStatus = ViewStatus.BOTTOMS
    } 
    if(productView === ViewStatus.SHOES){
      this.viewStatus = ViewStatus.SHOES
    } 
    if(productView === ViewStatus.ACCESSORIES){
      this.viewStatus = ViewStatus.ACCESSORIES
    } 
  }

  addToCart(item: any):void { //need to specify type
    console.log("item ID", item);
    //need to add some service and add to carts(need to have a usertable with cart)
  }
}
