import { Component } from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent {

  cards = [
    {title: 'Conducere ANAF',
    text: 'Află mai multe despre conducerea ANAF și vezi cine are grijă de taxele tale.',
    orderNumber: 1},
    {title: 'Organizare ANAF',
    text: 'Află mai multe informații despre organizarea și structura ANAF.',
    orderNumber: 2},
    {title: 'Resurse umane',
    text: 'Buletine informative, rapoarte, legea 544/2001, anunțuri și alte informații publice despre resurse umane.',
    orderNumber: 3},
    {title: 'Coduri IBAN ANAF',
    text: 'Plătești taxe online? Aici găsești codurile IBAN ale fiecărei unități ANAF din țară.',
    orderNumber: 4},
    {title: 'Reclamatii ANAF',
    text: 'Ai avut o experiență neplăcută și vrei să depui o reclamație? Aici găsești modele de reclamație.',
    orderNumber: 5},
    {title: 'Buget si Contabilitate',
    text: 'Află mai multe informații despre bugetul ANAF, bilanțul contabil și declarații de avere și interese.',
    orderNumber: 6},
    {title: 'Bunuri ANAF',
    text: 'Află mai multe informații despre situația bunurilor imobile, lista achizițiilor publice și anunțuri despre achiziții.',
    orderNumber: 7},
    {title: 'International',
    text: 'Află mai multe informații despre modul de operare ANAF peste graniță.',
    orderNumber: 8}
  ];

  // classDeclaring(index:number) {
  //   if(index === 0) {
  //     return `secundar-stanga ${index}`;
  //   } else if (index === 1) {
  //     return `principal ${index}`;
  //   } else if (index === 2) {
  //     return `secundar-dreapta ${index}`;
  //   } else {
  //     return `invizibil ${index}`;
  //   }
  // }

  classDeclaring(nrDiv:number, index: number) {
    if(nrDiv >1 && nrDiv < 6) {
      if(nrDiv-2 === index) {
        return 'tertiar-stanga';
      } else if(nrDiv-1===index) {
        return 'secundar-stanga';
      } else if(nrDiv===index) {
        return 'principal';
      } else if(nrDiv+1===index) {
        return 'secundar-dreapta';
      } else if(nrDiv+2===index) {
        return 'tertiar-dreapta';
      } else {
        return 'invizibil';
      }
    } else if(nrDiv===1) {
        if(nrDiv===index) {
          return 'principal';
        } else if(nrDiv-1===index) {
          return 'secundar-stanga';
        } else if(nrDiv+6===index) {
          return 'tertiar-stanga';
        } else if(nrDiv+1===index) {
          return 'secundar-dreapta';
        } else if(nrDiv+2===index) {
          return 'tertiar-dreapta';
        } else {
          return 'invizibil';
        }
    } else if(nrDiv===0) {
      if(nrDiv===index) {
        return 'principal';
      } else if(nrDiv+7===index) {
        return 'secundar-stanga';
      } else if(nrDiv+6===index) {
        return 'tertiar-stanga';
      } else if(nrDiv+1===index) {
        return 'secundar-dreapta';
      } else if(nrDiv+2===index) {
        return 'tertiar-dreapta';
      } else {
        return 'invizibil';
      }
    } else if(nrDiv===6) {
      if(nrDiv===index) {
        return 'principal';
      } else if(nrDiv-1===index) {
        return 'secundar-stanga';
      } else if(nrDiv-2===index) {
        return 'tertiar-stanga';
      } else if(nrDiv+1===index) {
        return 'secundar-dreapta';
      } else if(nrDiv-6===index) {
        return 'tertiar-dreapta';
      } else {
        return 'invizibil';
      }
    } else if(nrDiv===7) {
      if(nrDiv===index) {
        return 'principal';
      } else if(nrDiv-1===index) {
        return 'secundar-stanga';
      } else if(nrDiv-2===index) {
        return 'tertiar-stanga';
      } else if(nrDiv-7===index) {
        return 'secundar-dreapta';
      } else if(nrDiv-6===index) {
        return 'tertiar-dreapta';
      } else {
        return 'invizibil';
      }
    } else {
      return 'Nu merge sa facem asa';
    }
  }

    nrDiv = 0;

  onChangeLeft() {
    if (this.nrDiv===0) {
      this.nrDiv=7;
    } else {
      this.nrDiv=this.nrDiv-1;
    }
  }

    onChangeRight() {
      if(this.nrDiv===7) {
        this.nrDiv=0;
      } else {
        this.nrDiv=this.nrDiv+1;
      }
    }

}
