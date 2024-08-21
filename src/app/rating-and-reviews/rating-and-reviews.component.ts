import { Component } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';

@Component({
  selector: 'app-rating-and-reviews',
  standalone: true,
  imports: [StarRaitingComponent],
  templateUrl: './rating-and-reviews.component.html',
  styleUrl: './rating-and-reviews.component.css'
})
export class RatingAndReviewsComponent {

}
