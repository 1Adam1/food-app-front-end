import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageLoaded = false;
  products: Product[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(results => {
      this.products = results;
      this.pageLoaded = true;
    });
  }

  goToProductCreationPage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  goToProductInfoPage(product: Product) {
    this.router.navigate([product._id], {relativeTo: this.route});
  }

}
