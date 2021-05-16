import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { CustomerService } from '../customer.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { Vehicle } from '../vehicle'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] =[];
  vehicles: Vehicle[] =[];
  custid!: string
  

  constructor(private customerService: CustomerService, private router: Router, private router1: ActivatedRoute) { }
  showMe: boolean = false;
  ngOnInit(): void {
    this.getCustomers();
                     //this.getVehicles();
    //this.custid = this.router1.snapshot.params[`custid`];
    //this.getVehiclesByCustId();

    /*this.customerService.getVehiclesBycustid(`c101`).subscribe(data =>{
      this.vehicles = data;
    })*/
    /*this.customerService.getVehiclesBycustid(this.custid).subscribe(data =>{
      this.vehicles = data;
     })*/
     this.getVehicles();
  }

  private getCustomers() {
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
  }

  private getVehicles(){
    this.customerService.getVehicles().subscribe(data =>{
      this.vehicles = data;
    })
  }

  customerDetails(custid: string){
    this.router.navigate([`customer-details`, custid])

  }

  private getVehiclesByCustId(){
    this.customerService.getVehiclesBycustid(this.custid).subscribe(data =>{
      this.vehicles = data;
    })
  }

  getCustVehicles(custid: string){
    this.customerService.getVehiclesBycustid(this.custid).subscribe(data =>{
      //this.vehicles = data;
      this.getVehicles();
     })

  }


  
}
