import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, Sidebar],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

export class Products {

  products:any[] = [];
  loading:boolean = true;

  constructor(private http:HttpClient,
              private router: Router,
            private cdr : ChangeDetectorRef
          ){}

  ngOnInit(): void {

  this.loading = true;

  this.http
  .get<any>('https://jsonfakery.com/products/random/99')

  .subscribe((res)=>{

    this.products = res;

    this.loading = false;
    this.cdr.detectChanges();
 
  });

}
viewProduct(product:any){

  this.router.navigate(
    ['/product-details'],
    {
      state:{ product:product }
    }
  );

}
cartItems:any[] = [];
addToCart(product:any){

  this.cartItems.push(product);

  console.log(this.cartItems);

  alert('Product Added To Cart');

}
}