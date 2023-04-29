import { Component } from '@angular/core';

@Component({
  selector: 'app-subsol',
  templateUrl: './subsol.component.html',
  styleUrls: ['./subsol.component.css']
})
export class SubsolComponent {

  siteSubsol = [
    {unu: 'Contact',
    unuURL: 'https://www.anaf.ro/anaf/internet/ANAF/asistenta_contribuabili/AEOI/contact_AEOI/contact_business/!ut/p/a1/jZBND0NAEIZ_jasdxEd7o2lsRYomgr00NNslwQpaf784VaJ0bjN5nsk7gwiKEanTd8HSvuB1Wk490e5YwhqWDdmx9TOAZlwPILmODCd9BJJvAHAAEKjW5abaPoCjLH3PcnUILCkMNc-Tx1U7_gj85cOPMmEvf4TIElm5YBOYIs7ARgYHEVbybP5nYtaZYjBEWvqkLW3FVzuO875vuqMAAgzDIDLOWUnFB68EWFNy3vUoXpKoqcIwhsKvIqP7AKi3NvM!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/',
    doi: 'Activitate online si media',
    doiURL: 'https://www.facebook.com/www.ANAF.ro/?locale=ro_RO',
    trei: 'Harta site',
    treiURL: 'https://www.anaf.ro/anaf/internet/ANAF/info_anaf/harta_site',
    patru: 'GDPR',
    patruURL: 'https://www.anaf.ro/anaf/internet/ANAF/info_anaf/protectia_datelor/'},
    {unu: 'www.gov.ro',
    unuURL: 'https://gov.ro/',
    doi: 'Toate ministerele',
    doiURL:'https://www.gov.ro/ro/guvernul/organizare/ministere',
    trei: 'Monitorul oficial',
    treiURL: 'https://monitoruloficial.ro/',
    patru: 'Arhivele ANAF',
    patruURL: 'https://static.anaf.ro/static/10/Anaf/legislatie/Arhiva_cod_fiscal.htm'}
  ];

}
