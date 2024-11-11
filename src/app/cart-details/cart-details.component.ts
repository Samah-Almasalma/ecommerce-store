import { Component } from '@angular/core';
import { HomeservicesService } from '../home/homeservices/homeservices.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {
data:any[]=[]
dataItem:any[]=[]


  constructor(private serv:HomeservicesService){

  }


  ngOnInit(){
    this.getAll()
  }

  getAll(){
    this.serv.getAllCart().subscribe((data:any)=>{
    this.data=data
    console.log(this.data);
    
    this.dataItem=data.products
    console.log(this.dataItem);
    
    })
  }

}
