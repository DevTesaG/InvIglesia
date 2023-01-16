import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product(undefined);
  submitted = false;
  img_preview = '';
  percentage = 0;
  image?: File;
  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    if (this.image) {
      this.product.img_file = this.image
      this.image = undefined
      this.ProductService.pushProduct(this.product).subscribe( //TODO:  deprecated ought to be changed 
        percentage => {
          this.percentage = Math.round(percentage ? percentage : 0);
        },
        error => {
          console.log(error);
        }
      );
      this.router.navigateByUrl("/inventory")
    }
  }


  preview (event:any): void{
    this.img_preview = '';
    this.image = event.target.files.item(0);

    if(this.image){
      
      const reader = new FileReader();
      reader.onload = (e: any)=>{
        this.preview = e.target.result;
      }
      reader.readAsDataURL(this.image);
    }
    this.img_preview = URL.createObjectURL(event.target.files[0]);
  }

}
