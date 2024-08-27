import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module'; // Import from app-routing.module.ts

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule // Add AppRoutingModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }