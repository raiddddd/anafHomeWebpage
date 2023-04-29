import { Component } from '@angular/core';

@Component({
  selector: 'app-cuprins',
  templateUrl: './cuprins.component.html',
  styleUrls: ['./cuprins.component.css']
})
export class CuprinsComponent {

  cuprins = [
    "I. Programe și strategii",
    "II. Strategia Națională Anticorupție",
    "III. Programe de digitalizare",
    "IV. Relații internaționale",
    "V. Granturi Elvețiene",
    "VI. EMCS"
  ];

  id_uri = [
    "programeStrategii",
    "strategieAnticoruptie",
    "programeDigitalizare",
    "relatiiInternationale",
    "granturiElvetiene",
    "emcs"
  ]

    onClick(elemId:string) {
      let elem: any = document.querySelector(`#${elemId}`);
      console.dir(elem);
      window.scrollTo(0,elem.offsetTop);
    }

}
