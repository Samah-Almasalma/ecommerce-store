import {  HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {

  constructor( private http:HttpClient) {}


  getAllPro(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductByCategories(value:string){
    return this.http.get('https://fakestoreapi.com/products/category/' + value)
  }
  getOneProduct(id:any){
    return this.http.get('https://fakestoreapi.com/products/' + id)
  }
  addProduct(data:any){
    return this.http.post('https://fakestoreapi.com/products', data)
  }
  createOrder(data:any){
    return this.http.post('https://fakestoreapi.com/carts', data)
  }
  // getAllCart(param?:any){
  //   let params = new HttpParams
  //   params = params.append("startdate" , param?.start).append("enddate" , param?.end)
  //   return this.http.get('https://fakestoreapi.com/carts', {params} )
  // }
  getAllCart(){
    return this.http.get('https://fakestoreapi.com/carts')
  }
}


