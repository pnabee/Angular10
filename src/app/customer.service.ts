import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Customer} from './customer'
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:8081/api/";

  constructor(private httpClient: HttpClient) { }
  getCustomersList(): Observable<Customer[]>{
    console.log("Sdfsdfsdfsd sss");
    return this.httpClient.get<Customer[]>(`${this.baseURL}/customer`)
  }

  getVehicles(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/vehicle`)
  }

  getCustomerById(custid: string): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/customer/${custid}`)
    //return this.httpClient.get<Customer>(`${this.baseURL}/vehicle/vehicles/${custid}`)
  }

  getVehicleById(vid: string): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(`${this.baseURL}/vehicle/${vid}`)
    
  }

  getVehiclesBycustid(custid: string): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/vehicle/vehicles/${custid}`)
    
  }

}
