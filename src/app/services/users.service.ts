import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pagable } from "../model/pageable.model";

@Injectable({
    providedIn : 'root'
})
export class UsersService {

    private USER_URL ="http://localhost:8088/ecomorg-webservice/api/users";

    constructor(private httpClient: HttpClient) { }

    /** Get users List */
    getAll(pagable:Pagable){
        return this.httpClient.get<any[]>(`${this.USER_URL}?page=${pagable.page}&size=${pagable.size}&sort=${pagable.sort}&sortOrder=${pagable.sortOrder}`);
    }

    /** Get one user */
    getOne(userId:number){
        return this.httpClient.get<any[]>(`${this.USER_URL}/${userId}`);
    }

    /** Add user */
    add(userObj:any){
        return this.httpClient.post<any>(`${this.USER_URL}`,userObj);
    }

    /** Update user */
    update(userObj:any){
        return this.httpClient.put<any>(`${this.USER_URL}`,userObj);
    }

    /** Delete user */
    delete(userId:number){
        return this.httpClient.delete<any>(`${this.USER_URL}/${userId}`);
    }
}