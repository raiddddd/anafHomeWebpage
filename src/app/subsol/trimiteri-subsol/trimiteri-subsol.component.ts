import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trimiteri-subsol',
  templateUrl: './trimiteri-subsol.component.html',
  styleUrls: ['./trimiteri-subsol.component.css']
})
export class TrimiteriSubsolComponent {

  @Input() unu='';
  @Input() doi='';
  @Input() trei='';
  @Input() patru='';
  @Input() unuURL='';
  @Input() doiURL='';
  @Input() treiURL='';
  @Input() patruURL='';
  
}
