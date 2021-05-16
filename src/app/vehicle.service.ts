import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Customer} from './customer'
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseURL1 = "http://localhost:8081/api/vehicle/vehicles";

  constructor(private httpClient: HttpClient) { }

  getVehiclesBycustid(custid: string): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(`${this.baseURL1}/${custid}`)
    
  }
}
