import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, StarRaitingComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
@Input() rating!: number;
@Input() header: string='';
@Input() comment: string='';
}
