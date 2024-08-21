import { Component } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [StarRaitingComponent],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent {

}
