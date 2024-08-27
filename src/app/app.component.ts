import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignUpNowComponent } from './sign-up-now/sign-up-now.component';
import { FindClothesComponent } from './find-clothes/find-clothes.component';
import { BrandsSectionComponent } from './brands-section/brands-section.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { TopSellingComponent } from './top-selling/top-selling.component';
import { ByStyleComponent } from './by-style/by-style.component';
import { UstomersComponent } from './ustomers/ustomers.component';
import { StayUptodateComponent } from './stay-uptodate/stay-uptodate.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewComponent } from './review/review.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SignUpNowComponent, FindClothesComponent, BrandsSectionComponent, NewArrivalsComponent, TopSellingComponent, ByStyleComponent, UstomersComponent, StayUptodateComponent, FooterComponent, ProductDetailsComponent, ReviewComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce-Website-Template';
  hello = 'Your Header';
  comment = 'Your Comment';
  rating = 10;
}
