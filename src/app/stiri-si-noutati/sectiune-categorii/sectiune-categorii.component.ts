import { Component } from '@angular/core';

@Component({
  selector: 'app-sectiune-categorii',
  templateUrl: './sectiune-categorii.component.html',
  styleUrls: ['./sectiune-categorii.component.css']
})
export class SectiuneCategoriiComponent {

  clasaPressed = false;

  categoriiStiri = [
    "1. Comunicate de presă ANAF",
    "2. Rapoarte și studii",
    "3. Legislație - Buletin informativ",
    "4. Cursuri Valutare",
    "5. Anunțuri de interes general, valorificări, executări, etc.",
    "6. Plan de măsuri pentru eficientizarea colectării veniturilor la Bugetul General Consolidat",
    "7. Norme de venit",
    "8. Anunțuri de achiziție",
    "9. Anunțuri valorificare bunuri",
    "10. Anunțuri resurse umane",
    "11. Situația deconturilor de TVA cu opțiune de rambursare",
    "12. Acorduri internaționale",
    "13. Protocoale ANAF",
    "14. Prețuri medii produse agricole",
    "15. Transabilitate produse din tutun",
    "16. Info Brexit"
  ];

  addRemoveClass() {
    this.clasaPressed = !this.clasaPressed;
  }


}
