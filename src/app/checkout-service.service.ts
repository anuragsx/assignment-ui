import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {

  constructor(private http: HttpClient) { }


// function for post api call with required params.
  postPhoneNumber(param: any) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/vnd.api+json'
        })
      }     
      return this.http.post('http://localhost:3000/notifications/', param, httpOptions).pipe(map(data => {
          return data;
      }));

  }
}
