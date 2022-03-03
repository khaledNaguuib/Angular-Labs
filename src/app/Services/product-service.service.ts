import { IProduct } from './../Shared Classes and types/IProduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  ProductList:Array<IProduct>=[
  
       {"ID":1,"Name":"Marvel Hoodie","Quantity":3,"Price":400,"Img":""},
       {"ID":2,"Name":"NASA Hoodie","Quantity":1,"Price":400,"Img":""},
       {"ID":3,"Name":"Chernoobl Hoodie","Quantity":2,"Price":400,"Img":""},
       {"ID":4,"Name":"FCB Hoodie","Quantity":2,"Price":400,"Img":""},
    
  ]

  private _url:string="/assets/Data/Products.json";

  GetAllProducts():Observable<IProduct[]>
   {
     return this.http.get<IProduct[]>(this._url).pipe(catchError(err =>
      {
        return throwError (err.Message || "Server Error")
      }));
     
   }


  ProductListID:any;

  GetProductById(id:any) {

    if(typeof id == 'number')
    {
    
     this.ProductList.filter((e)=>{
       if(e.ID===id){
        this.ProductListID=e;
       }
       
     });
     return this.ProductListID;

    }else{
      return null;
    }

  }

}
