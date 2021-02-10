import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCreateRequestData } from 'src/app/model/api/requests/product.request-data';
import { Unit } from 'src/app/model/enums/unit.enum';
import { ObjectConverterService } from 'src/app/services/object-converter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit { 
  form: FormGroup;
  pageLoaded = false;
  possibleUnits = [];

  constructor(
    private converter: ObjectConverterService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getPossibleUnits();
    this.pageLoaded = true;
  }

  private getPossibleUnits() {
    for (let unitKey in Unit) {
      this.possibleUnits.push(Unit[unitKey]);
    }
  }

  private createForm() {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'kilocaloriesPerUnit': new FormControl(null, [Validators.required, Validators.min(0)]),
      'defaultUnit': new FormControl(null, [Validators.required]),
      'description': new FormControl(null),
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const fields = [
      'name',
      'kilocaloriesPerUnit',
      'defaultUnit',
      'description'
    ];
    const data = this.converter.convertFormFieldsToObject<ProductCreateRequestData>(this.form, fields);

    console.log(data);

    this.productService.createProduct(data).subscribe(result => {
      this.router.navigate(['/app/products']);
    }, error => {
      alert('Can\'t create product with this data');
    });
  }

}
