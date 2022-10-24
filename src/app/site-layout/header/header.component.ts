import { ProductService } from './../../products/product.service';
import { ViewAllProductComponent } from './../../products/view-all-product/view-all-product.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
  }

  search(event:any){
  var searchTerm = event.target.value
  this.ProductService.search.next(searchTerm)
   
    
  }

}
