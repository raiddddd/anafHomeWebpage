import { Component } from '@angular/core';

@Component({
  selector: 'app-servicii-anaf-home',
  templateUrl: './servicii-anaf-home.component.html',
  styleUrls: ['./servicii-anaf-home.component.css']
})
export class ServiciiAnafHomeComponent {

  componente = [
    {
      titlu: 'I. Servicii oferite contribuabililor',
      elemente: [
        "1. Catalogul serviciilor oferite contribuabilului",
        "2. Ghiduri curente și alte materiale informative",
        "3. Baze de date cu întrebări și răspunsuri",
        "4. Acces date prin SMS",
        "5. Adrese și sedii ANAF dotate cu calculatoare destinate Self-Service",
        "6. Rambursare TVA din UE",
        "7. One Stop Shop"
      ]
    },
    {
      titlu: 'II. Servicii Online',
      elemente: [
        "1. Servicii electronice oferite contribuabililor",
        "2. Spațiul Virtual Privat (SPV)",
        "3. Servicii WEB ANAF",
        "4. Seminarii WEB",
        "5. Registre diverse",
        "6. Rapoarte, tranzacții și transferuri",
        "7. Aplicații în curs de dezvoltare pentru interesul contribuabilului",
        "8. Obligații restante către bugete",
        "9. Aparate de marcat electronice fiscale",
        "10. Notificări",
        "11. PATRIM VEN - Specificații Tehnice",
        "12. RSS"
      ]
    },
    {
      titlu: 'III. Proiecte de digitalizare',
      elemente: [
        '1. SAF-T',
        '2. E-Factura',
        '3. OSS'
      ]
    },
    {
      titlu: 'IV. Programe utile',
      elemente: []
    },
    {
      titlu: 'V. Consultare Publică',
      elemente: []
    },
    {
      titlu: 'VI. Registrul unic al transparenței intereselor',
      elemente: []
    }
  ]; 

}
