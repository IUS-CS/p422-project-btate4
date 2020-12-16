import { Component, Input, OnInit } from '@angular/core';
import { shirtData, shoesData, accessoriesData, bottomData } from '../../../../Data-Classes/mockData';
import { GenericProduct } from '../../../../Data-Classes/dataStructures';
import { ProductsService, ViewStatus } from '../products-screen.service';

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() set viewType(viewStatus: ViewStatus) {
    if (viewStatus === ViewStatus.TOPS) {
      this.productArray = shirtData;
    } 
    if (viewStatus === ViewStatus.BOTTOMS) {
      this.productArray = bottomData;
    } 
    if (viewStatus === ViewStatus.SHOES) {
      this.productArray = shoesData;
    } 
    if (viewStatus === ViewStatus.ACCESSORIES) {
      this.productArray = accessoriesData;
    }
  };
  productArray: GenericProduct[];

  ViewStatus = ViewStatus;
  viewStatus: ViewStatus = ViewStatus.TOPS; // defaults to tops view
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item: any): void { //need to specify type
    console.log("item ID", item);
    //need to add some service and add to carts(need to have a usertable with cart)
  }
}
