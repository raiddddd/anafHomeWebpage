import { Component } from '@angular/core';

@Component({
  selector: 'app-cuprins',
  templateUrl: './cuprins.component.html',
  styleUrls: ['./cuprins.component.css']
})
export class CuprinsComponent {

  cuprins= [
    'I. Contextul fiscal',
    'II. Carta contribuabilului',
    'III. Calendarul obligațiilor fiscale',
    'IV. Toate formularele cu explicații',
    'V. Nomenclatoarele obligatiilor',
    'VI. Ghid de completare a declarațiilor de avere'
  ];

  id_uri = [
    "contextFiscal",
    "cartaContribuabilului",
    "calendar",
    "formulareExplicate",
    "nomenclatoare",
    "avere"
  ];

  onClick(elemId:string) {
    let elem: any = document.querySelector(`#${elemId}`);
    console.dir(elem);
    window.scrollTo(0,elem.offsetTop);
  }

}
