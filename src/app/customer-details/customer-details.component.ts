import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Vehicle } from '../vehicle'
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  custid!: string
  customer!: Customer;
  vehicles: Vehicle[]=[];

constructor(private router: ActivatedRoute, private customerService: CustomerService, private vehicleService: VehicleService) { 
  this.vehicles=[];
}
  
  ngOnInit(): void {
    this.custid = this.router.snapshot.params[`custid`];
    this.customer = new Customer();
    this.vehicles = new Vehicle();
    this.vehicleService.getVehiclesBycustid(this.custid).subscribe(data =>{
      this.vehicles = data;
     })

    this.customerService.getCustomerById(this.custid).subscribe(data =>{
      this.customer = data;
    })
  }

  

}


/*
/*    this.customerService.getVehiclesBycustid(this.custid).subscribe(data =>{
      this.vehicles = data;
    });*/
    
    //this.customerService.getVehicles().subscribe(data =>{
    //  this.vehicle = data;
    //})
    //this.getCustomers();
    //this.getVehiclesByCustId();


    //this.getVehicles();
            //this.getVehiclesByCustId();
  /*  this.customerService.getVehiclesBycustid(this.custid).subscribe(data =>{
    this.vehicles = data;
   })*/
  //}
  /*
    private getCustomers() {
      this.customerService.getCustomersList().subscribe(data => {
        this.customer = data;
      });
    }*/
  
    /*private getVehiclesByCustId(){
      this.customerService.getVehiclesBycustid(this.custid).subscribe(data =>{
        this.vehicles = data;
      })
    }*/
  
    /*getVehicles(){
      this.customerService.getVehicles().subscribe(data =>{
        this.vehicles = data;
      })
    }*/
