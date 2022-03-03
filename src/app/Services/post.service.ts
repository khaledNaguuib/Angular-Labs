import { catchError, Observable, throwError } from 'rxjs';
import { IPost } from './../Shared Classes and types/IPost';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  private _url:string="https://jsonplaceholder.typicode.com/posts";

  GetAllPosts():Observable<IPost[]>
   {
     return this.http.get<IPost[]>(this._url).pipe(catchError(err =>
      {
        return throwError (err.Message || "Server Error")
      }));
     
   }


}
