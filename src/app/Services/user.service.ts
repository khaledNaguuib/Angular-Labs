import { Observable,catchError,throwError } from 'rxjs';
import { IUser } from './../Shared Classes and types/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private _url:string="https://jsonplaceholder.typicode.com/users";

  GetAllUsers():Observable<IUser[]>
   {
    return this.http.get<IUser[]>(this._url).pipe(catchError(err =>
      {
        return throwError (err.Message || "Server Error")
      }));
     
   }
  }