import { Component } from '@angular/core';

@Component({
  selector: 'app-calendarul-obligatiilor',
  templateUrl: './calendarul-obligatiilor.component.html',
  styleUrls: ['./calendarul-obligatiilor.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CalendarulObligatiilorComponent {

  definitii = [
    "<span class='strong'> Obligația fiscală principală:</span> <i>'obligația de plată a impozitelor, taxelor și contribuțiilor sociale, precum și obligația organului fiscal de a restitui sumele încasate fără a fi datorate și de a rambursa sumele cuvenite, în situațiile și condițiile prevăzute de lege'</i>",
    "<span class='strong'> Obligația fiscală accesorie:</span> <i>'obligația de plată sau de restituire a dobânzilor, penalităților sau a majorărilor, aferente unor obligații fiscale principale'</i>"
  ];


  calendar = [
    "<span class='strong'>Documentele</span> ce trebuiesc depuse",
    "<span class='strong'>Termenul</span> de depunere",
    "<span class='strong'>Categoriile</span> de contribuabili vizate",
    "<span class='strong'>Baza legală</span> de depunere a acestor documente"
  ];

}
