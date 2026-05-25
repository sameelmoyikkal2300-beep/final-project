import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  badge?: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://tse1.mm.bing.net/th/id/OIP.rqd5ROx9Ed1WSaqfopEYPgHaK0?w=832&h=1216&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Sports',
      image: 'https://img.freepik.com/premium-photo/man-woman-playing-soccer-grass-park-stadium-field-nature-environment-competition-match-game-challenge-fitness-friends-sports-people-football-players-soccer-ball-training_590464-91551.jpg?w=2000'
    },
    {
      id: 5,
      name: 'Beauty',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      name: 'Books',
      image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 2999,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.5,
      reviews: 1250,
      discount: 30,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 5999,
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.3,
      reviews: 890,
      discount: 25
    },
    {
      id: 3,
      name: 'Premium Sneakers',
      price: 3499,
      image: 'https://images.pexels.com/photos/3472383/pexels-photo-3472383.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.6,
      reviews: 2100,
      discount: 20
    },
    {
      id: 4,
      name: 'Laptop Backpack',
      price: 1299,
      image: 'https://images.pexels.com/photos/296115/pexels-photo-296115.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.4,
      reviews: 567,
      discount: 15
    }
  ];

  newArrivals: Product[] = [
    {
      id: 5,
      name: 'Smartphone',
      price: 24999,
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      reviews: 3450,
      badge: 'New'
    },
    {
      id: 6,
      name: 'Wireless Charger',
      price: 899,
      image: 'https://images.pexels.com/photos/4944881/pexels-photo-4944881.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.2,
      reviews: 445,
      discount: 35
    },
    {
      id: 7,
      name: 'Portable Speaker',
      price: 2199,
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.5,
      reviews: 678,
      discount: 22
    },
    {
      id: 8,
      name: 'Camera Tripod',
      price: 1599,
      image: 'https://images.pexels.com/photos/606933/pexels-photo-606933.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.3,
      reviews: 312
    }
  ];

  deals: Array<{ title: string; discount: number; time: string }> = [
    { title: 'Electronics Flash Sale', discount: 50, time: 'Ends in 4h 32m' },
    { title: 'Fashion Mega Deals', discount: 40, time: 'Ends in 2h 15m' },
    { title: 'Home & Kitchen Festival', discount: 45, time: 'Ends in 6h 48m' }
  ];

  currentSlide = 0;
  banners = [
    'https://images.pexels.com/photos/2014881/pexels-photo-2014881.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/2220294/pexels-photo-2220294.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.banners.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.banners.length) % this.banners.length;
  }
}
