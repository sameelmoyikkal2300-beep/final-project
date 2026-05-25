import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})

export class ProductDetails {

  product:any = history.state.product;

 addToCart(){

  localStorage.setItem('cart','1');

  alert('Product Added To Cart');

  window.location.reload();

}

}