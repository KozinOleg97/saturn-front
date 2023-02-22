import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Seller} from "../../data-types/Seller";


@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private httpClient: HttpClient) {
  }


  getSellerList(): Observable<Seller[]> {
    return this.httpClient.get<Seller[]>(`sellers`)
  }


  getSeller(id: number): Observable<Seller> {
    return this.httpClient.get<Seller>(`sellers/${id}`)
  }

  updateSeller(id: number, seller: Seller): Observable<Object> {

    return this.httpClient.put<Object>(`sellers/${id}`, seller);
  }

  deleteSeller(id: number): Observable<Object> {
    return this.httpClient.delete<Object>(`sellers/${id}`)
  }

  addSeller(seller: Seller): Observable<number> {

    return this.httpClient.post<number>(`sellers`, seller);
  }
}
