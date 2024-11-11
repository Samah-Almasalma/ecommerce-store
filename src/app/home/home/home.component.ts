import { Component } from '@angular/core';
import { HomeservicesService } from '../homeservices/homeservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showData:any[]=[]
  showCategories:any={}
  showLoader:boolean=false
  showError:boolean=false
  showErrorValue:any
  cartProduct:any[]=[]
  errorAdd:boolean=false
  doneAdd:boolean=false
  



  constructor(private servHome:HomeservicesService) {}

  ngOnInit(){
  this.getShowProduct()
  this.showAllCategories()
  }

  getShowProduct(){
    this.showLoader=true
    this.servHome.getAllPro().subscribe((data:any)=>{

      this.showData=data
      this.showLoader=false
      this.showError=false


    } , error=>{
      this.showError=true
      this.showErrorValue=error.message
      console.log('this is show pro',error.message);
      
    }
  )
  }
  showAllCategories(){
    this.showLoader=true
    this.servHome.getAllCategories().subscribe((data)=>{
      // console.log(data)
      this.showCategories=data
      this.showLoader=false
    } ,error =>{
      console.log('this is error',error.message);
      
    }
  )
  }
  filterData(e:any){
    let value=e.target.value
    if(value=='all'){
      this.getShowProduct()
    }
    else{
      this.getProductByCategories(value)
    }
    
    // console.log(value);
    
  }
 


  getProductByCategories(keyword:string){
    this.showLoader=true
    this.servHome.getProductByCategories(keyword).subscribe((data:any)=>{
      // console.log(data);
      
      this.showData=data
      this.showLoader=false
    })
  }
  addCart(e:any){
    console.log(e);
    if("addProduct" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("addProduct")!)
      localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
      let valueFind=this.cartProduct.find(item=>item.item.id==e.item.id)
      if(valueFind){
        this.errorAdd=true
        this.doneAdd=false
        window.scroll(0,0)
      }
      else{
        this.cartProduct.push(e)
        localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
        this.errorAdd=false
        this.doneAdd=true
        window.scroll(0,0)
      }
      }
      else{
        this.cartProduct.push(e)
        localStorage.setItem("addProduct",JSON.stringify(this.cartProduct))
      }
    }
 
  
  }

