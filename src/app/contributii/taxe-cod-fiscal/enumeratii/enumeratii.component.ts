import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enumeratii',
  templateUrl: './enumeratii.component.html',
  styleUrls: ['./enumeratii.component.css']
})
export class EnumeratiiComponent {

  @Input() titlu='';
  @Input() unu='';
  @Input() doi='';
  @Input() trei='';
  @Input() patru='';

}
