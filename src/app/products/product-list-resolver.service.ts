import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Injectable()
export class ProductListResolver implements Resolve<IProduct[]> {

  constructor(private productService: ProductService) {}

  resolve(): Observable<IProduct[]> | Promise<IProduct[]> | IProduct[] {
    return this.productService.getProducts();
  }
}