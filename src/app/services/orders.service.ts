import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  private ODR_URL ="http://localhost:8088/ecomorg-webservice/api/orders";

  getAll() {
    return this.httpClient.get<any[]>(`${this.ODR_URL}`);
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>(`${this.ODR_URL}/${id}`);
  }
}
