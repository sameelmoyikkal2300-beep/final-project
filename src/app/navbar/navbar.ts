import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[RouterModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar {

  cartCount:number = 0;

  ngOnInit(){

    const cart =
    localStorage.getItem('cart');

    if(cart){

      this.cartCount = 1;

    }

  }

}