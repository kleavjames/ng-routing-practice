import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

  constructor(private productService: ProductService,
              private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct> | Promise<IProduct> | IProduct {
    let id = route.params['id'];

    if (isNaN(id)) {
      console.log(`Product id ${id} was not a number.`);
      this.router.navigate(['/products']);
      return Observable.of(null);
    }

    return this.productService.getProduct(+id)
      .map(product => {
          if (product) {
            return product;
          }
          console.log(`Product of id ${id} was not found.`);
          this.router.navigate(['/product']);
          return null;
        })
      .catch(error => {
          console.log(`Retrieval error: ${error}`);
          this.router.navigate(['/products']);
          return Observable.of(null);
        });
  }
}
