import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deal} from "../../data-types/Deal";


@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private httpClient: HttpClient) {
  }

  getDealList(): Observable<Deal[]> {
    return this.httpClient.get<Deal[]>(`deals`)
  }

}
