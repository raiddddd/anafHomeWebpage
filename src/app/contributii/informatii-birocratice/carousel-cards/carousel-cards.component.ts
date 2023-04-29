import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.css']
})
export class CarouselCardsComponent {

  @Input() titlu='';
  @Input() outer='';
  @Input() buttonTxt='';

}
