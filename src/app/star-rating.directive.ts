import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStarRating]'
})
export class StarRatingDirective implements OnInit {
  @Input() rating: number = 0; // Input for star rating
  @Input() maxRating: number = 5; // Maximum stars, default is 5

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.renderStars();
  }

  renderStars() {
    const starFull = '<i class="fas fa-star"></i>'; // FontAwesome full star
    const starEmpty = '<i class="far fa-star"></i>'; // FontAwesome empty star

    let starHtml = '';

    // Add full stars based on the rating
    for (let i = 0; i < this.rating; i++) {
      starHtml += starFull;
    }

    // Add empty stars for the remaining slots
    for (let i = this.rating; i < this.maxRating; i++) {
      starHtml += starEmpty;
    }

    // Set the HTML content of the element
    this.el.nativeElement.innerHTML = starHtml;
  }
}
