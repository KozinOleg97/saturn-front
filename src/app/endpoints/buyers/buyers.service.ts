import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Buyer} from "../../data-types/Buyer";

@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  constructor(private httpClient: HttpClient) { }


  getBuyerList():Observable<Buyer[]>{
    return this.httpClient.get<Buyer[]>(`buyers`)
  }


  getBuyer(id:number):Observable<Buyer>{
    return this.httpClient.get<Buyer>(`buyers/${id}`)
  }

  updateBuyer(id:number, buyer: Buyer): Observable<Object> {

    return this.httpClient.put<Object>(`buyers/${id}`, buyer);
  }

  deleteBuyer(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`buyers/${id}`)
  }

  addBuyer(buyer: Buyer): Observable<number> {

    return this.httpClient.post<number>(`buyers`, buyer);
  }
}
