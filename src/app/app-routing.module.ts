import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './user/auth.guard';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategy } from './selective-strategy.service';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  // { path: 'products', canLoad: [AuthGuard], loadChildren: 'app/products/product.module#ProductModule' },
  {
    path: 'products',
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: 'app/products/product.module#ProductModule'
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      // {enableTracing: true} to trace every routing events
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: SelectiveStrategy
    }) 
  ],
  exports: [ RouterModule ],
  providers: [ SelectiveStrategy ],
})
export class AppRouteModule {}
