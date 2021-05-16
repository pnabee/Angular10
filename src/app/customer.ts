import { Vehicle } from './vehicle'
import { Type } from '@angular/core'

export class Customer {
    custid!: string;
    name: string | undefined;
    address: string | undefined;
    vehicles: Vehicle | undefined;

    //@Type(() => Vehicle)
    //vehicle!: Vehicle;
}
