import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagable } from '../model/pageable.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private PRD_URL =`${environment.apiBaseUrl}/products`;

  constructor(private httpClient: HttpClient) { }

  /** Get product List */
  getAll(pagable: Pagable) {
    return this.httpClient.get<any[]>(`${this.PRD_URL}?page=${pagable.page}&size=${pagable.size}&sort=${pagable.sort}&sortOrder=${pagable.sortOrder}`);
  }

  /** Get one product */
  getOne(productId: number) {
    return this.httpClient.get<any[]>(`${this.PRD_URL}/${productId}`);
  }

  /** Add product */
  add(productObj: any) {
    return this.httpClient.post<any>(`${this.PRD_URL}`, productObj);
  }

  /** Update product */
  update(productObj: any) {
    return this.httpClient.put<any>(`${this.PRD_URL}`, productObj);
  }

  /** Delete product */
  delete(productId: number) {
    return this.httpClient.delete<any>(`${this.PRD_URL}/${productId}`);
  }
}
