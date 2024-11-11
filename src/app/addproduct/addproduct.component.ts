import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeservicesService } from '../home/homeservices/homeservices.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  addProduct!:FormGroup
  dataProduct:any={}

  constructor(private FB:FormBuilder, private serv:HomeservicesService){
this.createForm()
  }
  createForm(){
    this.addProduct=this.FB.group({
      title:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required],
      category:['',Validators.required],
    })
  }
add(){
  let dataValue=this.addProduct.value
  this.serv.addProduct(dataValue).subscribe((data:any)=>{
    this.dataProduct=data
  // console.log(data);
  })
  
}
}
