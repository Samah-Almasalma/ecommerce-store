import { Component } from '@angular/core';
import { HomeservicesService } from '../home/homeservices/homeservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
cartProduct:any[]=[]
deleteData:boolean=false
total:any
sendData:boolean=false


constructor(private serv:HomeservicesService){

}


ngOnInit(){
  this.getDataCart()
  this.getAllTotal()
}

  getDataCart(){
    if("addProduct" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("addProduct")!)
      console.log(this.cartProduct);

      
  }
  }

  deleteProduct(id:any){
    this.cartProduct.splice(id,1)
    localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
    this.getAllTotal()
  }

  deleteAll(){
    this.cartProduct=[]
    localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
    this.deleteData=true
    this.getAllTotal()

  }

  minsQuantity(value:any){
    this.cartProduct[value].quantity--
    localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
    this.getAllTotal()
  }
  addQuantity(value:any){
    this.cartProduct[value].quantity++
    localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
    this.getAllTotal()

  }

  editQuantity(){
    localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
    this.getAllTotal()
  }
  getAllTotal(){
    this.total=0
    for (let x in this.cartProduct){
      this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity
    }
  }

  addToCart(){
  let products = this.cartProduct.map(item=> {
  return {productId:item.item.id , quantity:item.quantity}

  })
  let modelData ={
 userId:5,
 date: new Date(),
 products: products
  }
 this.serv.createOrder(modelData).subscribe((data)=>{
 this.sendData=true
 } , error =>{
  alert(error)
 })
  
  
  }


}
