import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product(undefined);
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  message = '';

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.product = history.state
  }

  ngOnChanges(): void {
    this.message = '';
    // this.currentProduct = { ...this.Product };
  }


  
  updateProduct(): void{
    this.ProductService.updateProduct(this.product);
    this.router.navigateByUrl('/inventory');
  }

  deleteProduct(): void {
    this.ProductService.removeProduct(this.product);
    this.router.navigateByUrl('/inventory');
  }


  // updateProduct(): void {
  //   const data = {
  //     title: this.currentProduct.name,
  //     description: this.currentProduct.description
  //   };

  //   if (this.currentProduct.key) {
  //     this.ProductService.update(this.currentProduct.key, data)
  //       .then(() => this.message = 'The Product was updated successfully!')
  //       .catch(err => console.log(err));
  //   }
  // }

}
