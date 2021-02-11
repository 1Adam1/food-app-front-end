import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductUpdateRequestData } from 'src/app/model/api/requests/product.request-data';
import { Product } from 'src/app/model/interfaces/product.interface';
import { ObjectConverterService } from 'src/app/services/object-converter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  form: FormGroup;
  pageLoaded = false;

  constructor(
    private productService: ProductService,
    private converter: ObjectConverterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];

    this.productService.getProduct(productId).subscribe(result => {
      this.product = result;
      this.createForm();
      this.pageLoaded = true;
    });
  }

  private createForm() {
    this.form = new FormGroup({
      'name': new FormControl(this.product.name, Validators.required),
      'kilocaloriesPerUnit': new FormControl({value: this.product.kilocaloriesPerUnit, disabled: true}, [Validators.required, Validators.min(0)]),
      'defaultUnit': new FormControl({value: this.product.defaultUnit, disabled: true}, [Validators.required]),
      'description': new FormControl(this.product.description),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const fields = [
      'name',
      'description'
    ];
    const data = this.converter.convertFormFieldsToObject<ProductUpdateRequestData>(this.form, fields);

    this.productService.updateProduct(data, this.product._id).subscribe(result => {
      this.router.navigate(['/app/products']);
    }, error => {
      alert('Can\'t update product with this data');
    });
  }
}
