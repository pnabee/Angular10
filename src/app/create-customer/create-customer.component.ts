import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.customer);
    
  }

}
