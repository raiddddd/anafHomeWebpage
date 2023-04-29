import { Component } from '@angular/core';

@Component({
  selector: 'app-taxe-cod-fiscal',
  templateUrl: './taxe-cod-fiscal.component.html',
  styleUrls: ['./taxe-cod-fiscal.component.css']
})
export class TaxeCodFiscalComponent {

  enumeratii = [
    { titlu: 'Agenții economici plătesc de regulă:',
      unu: 'Impozit pe profit',
      doi: 'Impozit pe venit',
      trei: 'Impozit pe dividende',
      patru: 'TVA'
    },
    {
      titlu: 'Angajații plătesc de regulă',
      unu: 'CAS',
      doi: 'CASS',
      trei: 'Șomaj',
      patru: 'Impozit pe venit'
    }
  ];

}
