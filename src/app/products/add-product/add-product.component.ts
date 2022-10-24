import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  addProductForm = this.formBuilder.group({
    id: [''],
      productName: [''],
      categoryId: [''],
      description: [''],
      price: [''],
      is_available: [''],
      productImg: [''],
      rating: [''],
      review: [''],
      vendor_name: [''],
      warranty: ['']
  })
  
  

  constructor(private formBuilder:FormBuilder,private ProductService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    
      var newProduct ={
        id: this.addProductForm.value.id,
        productName: this.addProductForm.value.productName,
        categoryId: this.addProductForm.value.categoryId,
        description: this.addProductForm.value.description,
        price: this.addProductForm.value.price,
        is_available: this.addProductForm.value.is_available,
        productImg: this.addProductForm.value.productImg,
        rating: this.addProductForm.value.rating,
        review: this.addProductForm.value.review,
        vendor_name: this.addProductForm.value.vendor_name,
        warranty: this.addProductForm.value.warranty
      }

      this.ProductService.addProduct(newProduct)
      .subscribe((data)=>{
        alert("New product added sucessffly")
        this.router.navigateByUrl('products')
      })

  }
}
