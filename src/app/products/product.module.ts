import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductResolver } from './product-resolver.service';

import { SharedModule } from '../shared/shared.module';
import { ProductEditTagsComponent } from './product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditGuard } from './product-edit.guard';
import { ProductListResolver } from './product-list-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      // { path: 'products',
      //   canActivate: [AuthGuard],
      //   children: [
          {
            path: '',
            component: ProductListComponent,
            resolve: { products: ProductListResolver }
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            resolve: { product: ProductResolver }
          },
          {
            path: ':id/edit',
            component: ProductEditComponent,
            canDeactivate: [ProductEditGuard],
            resolve: { product: ProductResolver },
            children: [
              { path: 'info', component: ProductEditInfoComponent },
              { path: '', redirectTo: 'info', pathMatch: 'full' },
              { path: 'tags', component: ProductEditTagsComponent }
            ]
          }
      //   ]
      // },
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ],
  providers: [
    ProductService,
    ProductListResolver,
    ProductResolver,
    ProductEditGuard
  ]
})
export class ProductModule {}
