import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-raiting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-raiting.component.html',
  styleUrl: './star-raiting.component.css'
})
export class StarRaitingComponent {
  @Input() star: number = 0;

  get fullStars(): number {
    return Math.floor(this.star / 2);
  }

  get halfStar(): number {
    return this.star % 2 === 0 ? 0 : 1;
  }
}
