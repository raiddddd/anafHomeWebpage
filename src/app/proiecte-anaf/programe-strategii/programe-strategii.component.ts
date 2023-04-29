import { Component } from '@angular/core';

@Component({
  selector: 'app-programe-strategii',
  templateUrl: './programe-strategii.component.html',
  styleUrls: ['./programe-strategii.component.css']
})
export class ProgrameStrategiiComponent {

  listaStrategii = [
    "1. <span class='strong'><a href='https://static.anaf.ro/static/10/Anaf/Informatii_R/StrategiaANAF_2021-2024_republ_19052021.pdf' target='_blank'>Strategia ANAF</a></span> pe termen mediu 2021 - 2024",
    "2. <span class='strong'><a href='https://static.anaf.ro/static/10/Anaf/Prezentare_R/Cod_etic_functionar.htm' target='_blank'>Codul etic</a></span> al funcționarului public din Administrația Fiscală care își desfășoară activitatea în domeniul Asistenței Contribuabililor",
    "3. <span class='strong'><a href='https://static.anaf.ro/static/10/Anaf/Prezentare_R/codul_etic_inspector.htm' target='_blank'>Codul etic</a></span> al inspectorului de control fiscal pe timpul desfășurării inspecției fiscale",
    "4. <span class='strong'><a href='https://static.anaf.ro/static/10/Anaf/Prezentare_R/Carta_deontologie1.pdf' target='_blank'>Carta</a></span> de deontologie și protecție juridică a funcționarilor publici din ANAF",
    "5. <span class='strong'><a href='https://static.anaf.ro/static/10/Anaf/Prezentare_R/Carta_management_aprobata_Ordin.pdf' target='_blank'>Carta</a></span> de management",
    "6. <span class='strong'><a href='https://static.anaf.ro/static/10/Anaf/Prezentare_R/Carta_proces_deciz_aprob_Ordin.pdf' target='_blank'>Carta</a></span> procesului decizional",
    "7. <span class='strong'><a href='https://static.anaf.ro/static/10/Anaf/Prezentare_R/Carta_comunicare_externa_MO.pdf' target='_blank'>Carta</a></span> de comunicare externă",
  ]
}