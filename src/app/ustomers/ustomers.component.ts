import { Component } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';


@Component({
  selector: 'app-ustomers',
  standalone: true,
  imports: [StarRaitingComponent],
  templateUrl: './ustomers.component.html',
  styleUrl: './ustomers.component.css'
})
export class UstomersComponent {

}
