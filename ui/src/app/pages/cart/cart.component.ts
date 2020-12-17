import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { GenericProduct } from 'src/Data-Classes/dataStructures';
import { shirtData } from '../../../Data-Classes/mockData';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'cart-screen',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['id', 'productId', 'name', 'price'];
  dataSource = shirtData;
  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  buyCart(): void{
    console.log("You bought items!");
  }
}
