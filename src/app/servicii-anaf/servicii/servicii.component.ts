import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicii',
  templateUrl: './servicii.component.html',
  styleUrls: ['./servicii.component.css']
})
export class ServiciiComponent {


  @Input() titlu= '';
  @Input() elements:string[]= [];
  @Input() index: number = 0;
}
