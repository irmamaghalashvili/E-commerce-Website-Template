import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignUpNowComponent } from './sign-up-now/sign-up-now.component';
import { FindClothesComponent } from './find-clothes/find-clothes.component';
import { BrandsSectionComponent } from './brands-section/brands-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SignUpNowComponent, FindClothesComponent, BrandsSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce-Website-Template';
}
