import { identifierModuleUrl } from '@angular/compiler'

export class Product {
    id
    name
    price
    description

constructor(id,name,price,description){
    this.id=id;
    this.name=name;
    this.description=description;
    this.price=price;
};
}