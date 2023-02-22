import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {District} from "../../data-types/District";

@Injectable({
  providedIn: 'root'
})
export class DistrictsService {


  constructor(private httpClient: HttpClient) { }


  getDistrictList():Observable<District[]>{
    return this.httpClient.get<District[]>(`districts`)
  }


  getDistrict(id:number):Observable<District>{
    return this.httpClient.get<District>(`districts/${id}`)
  }

  updateDistrict(id:number, district: District): Observable<Object> {

    return this.httpClient.put<Object>(`districts/${id}`, district);
  }

  deleteDistrict(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`districts/${id}`)
  }

  addDistrict(district: District): Observable<number> {

    return this.httpClient.post<number>(`districts`, district);
  }

}
