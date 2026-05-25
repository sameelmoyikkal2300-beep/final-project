import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [

    {
        path: '',
        component: Home
    },

    {
        path: 'products',
        component: Products
    },

    {
        path: 'contact',
        component: Contact
    },

    {
        path: 'product-details',
        component: ProductDetails
    },

    {
        path: '**',
        redirectTo: ''
    }

];