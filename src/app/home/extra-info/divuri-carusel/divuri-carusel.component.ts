import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divuri-carusel',
  templateUrl: './divuri-carusel.component.html',
  styleUrls: ['./divuri-carusel.component.css']
})
export class DivuriCaruselComponent {

  @Input() titlu='';
  @Input() text='';
  @Input() nrPag=0;

}
