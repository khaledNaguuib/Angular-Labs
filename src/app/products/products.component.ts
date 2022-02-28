import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers.Enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor()
     {

       this.Disount=DiscountOffers['10%'],
       this.Store_name='Qaaf Gallery',
       this.Store_Logo='./assets/x.png',
       this.ClientName='Khaled',
       this.IsPurshased=true
       this.ProductList=[
        {
          ID:1,
          Name:"Marvel Hoodie",
          Quantity:1,
          Price:400,
          Img:""
        },
        {
          ID:2,
          Name:"Pokemon Hoodie",
          Quantity:1,
          Price:400,
          Img:""
        },
        {
          ID:1,
          Name:"Retro 90's Shirt",
          Quantity:1,
          Price:320,
          Img:""
        }
      ]
      this.CategoryList=[
        {
          ID:99,
          Name:"Hoodies"
        },
        {
          ID:100,
          Name:"90's retro shirts"
        }
      ]

     }


  Disount!: DiscountOffers;
  Store_name!:string;
  Store_Logo!:string;
  ProductList!:IProduct[];
  CategoryList!:ICategory[];
  ClientName!:string;
  IsPurshased!:boolean;

  

  ngOnInit(): void {
  }

}
