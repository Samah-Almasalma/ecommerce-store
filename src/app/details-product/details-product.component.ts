import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeservicesService } from '../home/homeservices/homeservices.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent {
id:any
detailsProduct:any={}
  constructor( private route:ActivatedRoute, private serv:HomeservicesService){
this.id = route.snapshot.paramMap.get("id")
console.log("this is ID" , this.id)
  }

  ngOnInit(){
    this.getDetails()
  }


  getDetails(){
    this.serv.getOneProduct(this.id).subscribe((data:any)=>{
      this.detailsProduct=data
      console.log(this.detailsProduct);
      
    })
  }
}
