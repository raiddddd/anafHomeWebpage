import { Component } from '@angular/core';

@Component({
  selector: 'app-toate-formularele',
  templateUrl: './toate-formularele.component.html',
  styleUrls: ['./toate-formularele.component.css']
})
export class ToateFormulareleComponent {

  enumeratii = [
    "<strong>De ce</strong> se completează",
    "<strong>Termene</strong> de completare și condițiile de îndeplinire",
    "<strong>Cine</strong> o completează"
  ];

}
