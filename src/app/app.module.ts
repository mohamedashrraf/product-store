import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

import { ReactiveFormsModule } from '@angular/forms';





// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ProductsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
