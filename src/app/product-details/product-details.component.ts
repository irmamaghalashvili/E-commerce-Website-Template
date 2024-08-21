import { Component } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SignUpNowComponent } from '../sign-up-now/sign-up-now.component';
import { RatingAndReviewsComponent } from '../rating-and-reviews/rating-and-reviews.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [StarRaitingComponent, FooterComponent, HeaderComponent, SignUpNowComponent, RatingAndReviewsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
