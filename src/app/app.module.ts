import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { AppRouteModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 100 }),
    ProductModule,
    UserModule,
    MessageModule,
    AppRouteModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
