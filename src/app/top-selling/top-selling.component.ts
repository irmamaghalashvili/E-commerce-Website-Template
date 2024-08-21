import { Component } from '@angular/core';
import  { StarRaitingComponent } from '../star-raiting/star-raiting.component';

@Component({
  selector: 'app-top-selling',
  standalone: true,
  imports: [StarRaitingComponent],
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.css'
})
export class TopSellingComponent {

}
