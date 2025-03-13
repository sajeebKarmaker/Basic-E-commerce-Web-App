import { Component } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { googleProducts } from '../google-products';
import { appleProducts } from '../apple-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  store: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.store = params.get('store') || '';
      this.products = this.store === 'google' ? googleProducts : appleProducts;
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  /*onNotify() {
    this.modalMessage = 'You will be notified when the product goes on sale.';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }*/
}


