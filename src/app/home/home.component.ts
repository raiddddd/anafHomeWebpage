import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  informatii = [
    {text: 'Află contribuțiile tale pe un anumit an, sumele aferente și completează declarații în confortul casei tale.', textBtn:'Află contribuțiile',
    img:'../../assets/Imaghome/AflaContributiileImg.jpg'},
    {text: 'Obligațiile fiscale: Care sunt acestea, ce se completează și cum se realizează plata lor? ', textBtn:'Obligațiile fiscale',
    img:'../../assets/Imaghome/AflaObligatiileImg.png'},
    {text: 'Află mai multe despre toate serviciile online oferite de ANAF si vezi cum te putem ajuta.',
    textBtn:'Vezi serviciile',
    img:'../../assets/Imaghome/VeziServiciileImg.png'},
    {text: 'Află informații despre proiectele ANAF în România sau în Uniunea Europeană.',
    textBtn:'Proiectele ANAF',
    img:'../../assets/Imaghome/ProiecteleAnafImg.png'},
    {text: 'Stai la curent cu activitatea ANAF și află cum aplicăm legile constant și fără discriminare.',
    textBtn:'Blogul ANAF',
    img:'../../assets/Imaghome/BlogulAnaf.jpg'}
  ];

  routes = ['contributii','obligatii','servicii','proiecte','stiri']



}
