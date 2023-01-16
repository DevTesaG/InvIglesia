import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
 
  products?: any[];
  currentProduct?: Product;
  currentIndex = -1;
  title = '';

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  // refreshList(): void {
  //   this.currentProduct = undefined;
  //   this.currentIndex = -1;
  //   this.retrieveProducts();
  // }

  retrieveProducts(): void {
    this.ProductService.getProducts(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(products => {
      this.products = products;
    });
  }
}


  // removeAllProducts(): void {
  //   this.ProductService.deleteAll()
  //     .then(() => this.refreshList())
  //     .catch(err => console.log(err));
  // }



