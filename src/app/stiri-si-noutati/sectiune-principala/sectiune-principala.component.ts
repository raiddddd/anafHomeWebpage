import { Component } from '@angular/core';

@Component({
  selector: 'app-sectiune-principala',
  templateUrl: './sectiune-principala.component.html',
  styleUrls: ['./sectiune-principala.component.css']
})
export class SectiunePrincipalaComponent {

  stiri = [
    {
      data:'4.07.2022',
      titlu:'Cursuri valutare',
      continut:'Noutăți privind politicile BNR de raportare a Leului în fața Euro: ce propune Mugur Isărescu pentru a menține Leul românesc puternic.'
    },
    {
      data:'29.06.2022',
      titlu:'Rapoarte și studii',
      continut:'ANAF a finalizat și prezintă public raportul privind veniturile încasate de stat din creanțe rezultate în urma finalizării proceselor de la judecătorie pe luna Mai. În luna mai statul se judeca cu 130 persoane fizice și 56 persoane juridice pe motive de corupție și neplată a taxelor.'
    },
    {
      data:'28.06.2022',
      titlu:'Resurse umane',
      continut:'Rezultatele evaluării persoanelor care au aplicat pentru postul de Agent Economic Asistent la direcția regională Suceava. Data pentru contestații se va stabili în luna următoare.'
    },
    {
      data:'23.06.2022',
      titlu:'Info Brexit',
      continut:'Deciziile stabilite la nivel de UE cu privire la transportul de materie radioactivă din UE spre Marea Britanie sau dinspre Marea Britanie spre UE. Noile reglementări și proceduri de primire a mărfii care le vor înlocui pe cele vechi și de moment ce acopereau lipsa articolelor legislative pe această nișă.'
    },
    {
      data:'19.06.2022',
      titlu:'Comunicate de presă',
      continut:'Noile formulare electronice ce vor înlocui mersul la ghișeu. ANAF a lansat în SPV ghidul de completare a noilor declarații împreună cu perioada de implementare și de tranziție către un nivel mai înalt de tehnologizare.'
    }
  ];

}
