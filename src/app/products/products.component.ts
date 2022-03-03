import { ProductServiceService } from './../Services/product-service.service';
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

  constructor(private productService:ProductServiceService)
     {

       this.Discount=DiscountOffers['10%'],
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
          Img:"/assets/Marvel.png"
        },
        {
          ID:2,
          Name:"Pokemon Hoodie",
          Quantity:2,
          Price:400,
          Img:"/assets/pok.png"
        },
        {
          ID:3,
          Name:"Rick & Morty Hoodie",
          Quantity:1,
          Price:400,
          Img:"/assets/Rick.png"
        },
        {
          ID:4,
          Name:"Naruto Hoodie",
          Quantity:3,
          Price:400,
          Img:"/assets/Naruto.png"
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
        },
        {
          ID:101,
          Name:"Stickers"
        }
      ]

      
     }


  isPurchased:boolean=false;
  noDis:string=DiscountOffers.noDiscount;
  Discount!: DiscountOffers;
  Store_name!:string;
  Store_Logo!:string;
  ProductList!:IProduct[];
  CategoryList!:ICategory[];
  ClientName!:string;
  IsPurshased!:boolean;

  arr=[1,2,3,4,5,1];



  productList:any;  
  errMsg:any;
  ProductID:any;  


  // renderValues(){

  //   return this.productList=this.productService.GetAllProducts();
  // }

  isPurchasedChange()
  {
    if(this.isPurchased==false){
      this.isPurchased=true;
    }

  }

  DisplayClient()
  {
    console.log(this.ClientName)
  }

  ngOnInit(): void 
  {
    // this.productList=this.productService.GetAllProducts();
    // this.ProductID=this.productService.GetProductById(1);

    this.productService.GetAllProducts().subscribe(
      empData => {
        this.productList=empData;
      },
      error =>{
        this.errMsg = error;
      }


    )

  }

}
