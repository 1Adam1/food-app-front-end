import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { DataInfoComponentInputFormat } from '../../data-info/data-info.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  pageLoaded = false;
  product: Product;
  data: DataInfoComponentInputFormat;

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];

    this.productService.getProduct(productId).subscribe(result => {
      this.product = result;
      this.data = this.prepareDataInfoComponentInputFormat('Product data');
      this.pageLoaded = true;
    });
  }

  private prepareDataInfoComponentInputFormat(header: string): DataInfoComponentInputFormat {
    const result: DataInfoComponentInputFormat = {
      header,
      values: [
        {
          key: 'Name',
          value: this.product.name
        },
        {
          key: 'Kilocalories per unit',
          value: this.product.kilocaloriesPerUnit
        },
        {
          key: 'Default unit',
          value: this.product.defaultUnit
        },
        {
          key: 'Description',
          value: this.product.description
        }
      ]
    };

    return result;
  }

  goToProductEditionPage() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
