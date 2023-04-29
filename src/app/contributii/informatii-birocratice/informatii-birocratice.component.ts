import { Component } from '@angular/core';

@Component({
  selector: 'app-informatii-birocratice',
  templateUrl: './informatii-birocratice.component.html',
  styleUrls: ['./informatii-birocratice.component.css']
})
export class InformatiiBirocraticeComponent {

  infoCarousel = [
    {titlu: 'Calendarul obligațiilor fiscale',
    outerHTML:'<p>Află lună de lună, în fiecare an în parte:</p><ul><li>Ce documente trebuie să depui</li><li>La ce dată trebuie să le depui</li></ul>',
    buton: 'Consultă calendarul'},
    {titlu: 'Formulare Tip',
    outerHTML:'<p>Aici găsești toate formularele fiscale, cu explicatii, ordonate după număr.</p><p>Găsești explicații, modul de completare și informații importante ca tu să completezi fără probleme.</p>',
    buton: 'Vezi formularele'},
    {titlu: 'Ghid completare declarații de avere',
    outerHTML:'<p>Trebuie să depui declarațiile de avere și nu știi cum să le completezi?</p><p>Accesează această secțiune iar noi te vom ghida pas cu pas.</p>',
    buton: 'Vezi ghid'},
    {titlu: 'Toate formularele cu explicații',
    outerHTML:'<p>Aici găsești explicațiile de completare a fiecărui formular în parte.</p><p>Completează fără griji și greutate orice formular îți trebuie.</p>',
    buton: 'Vezi explicații'}
  ];

  nrDir = 0;

  classDeclaring(nrDiv: number, index: number) {
    if(nrDiv===0) {
      if(nrDiv===index) {
        return "principal";
      } else if(nrDiv+1===index) {
        return "secundar-dreapta";
      } else if(nrDiv+3===index) {
        return "secundar-stanga";
      } else {
        return 'tertiar';
      }
    } else if(nrDiv===1) {
      if(nrDiv===index) {
        return "principal";
      } else if(nrDiv+1===index) {
        return "secundar-dreapta";
      } else if(nrDiv-1===index) {
        return "secundar-stanga";
      } else {
        return 'tertiar';
      }
    } else if(nrDiv===2) {
      if(nrDiv===index) {
        return "principal";
      } else if(nrDiv+1===index) {
        return "secundar-dreapta";
      } else if(nrDiv-1===index) {
        return "secundar-stanga";
      } else {
        return 'tertiar';
      }
    } else if(nrDiv===3){
      if(nrDiv===index) {
        return "principal";
      } else if(nrDiv-3===index) {
        return "secundar-dreapta";
      } else if(nrDiv-1===index) {
        return "secundar-stanga";
      } else {
        return 'tertiar';
      }
    } else {
      return 'Nu se poate face';
    }
  }

  onChangeLeft() {
    if (this.nrDir===0) {
      this.nrDir=3;
    } else {
      this.nrDir=this.nrDir-1;
    }
    console.log(this.nrDir);
  }

  onChangeRight() {
    if(this.nrDir===3) {
      this.nrDir=0;
    } else {
      this.nrDir=this.nrDir+1;
    }
    console.log(this.nrDir);
  }
}
