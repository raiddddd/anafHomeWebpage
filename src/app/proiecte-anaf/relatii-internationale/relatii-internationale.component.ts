import { Component } from '@angular/core';

@Component({
  selector: 'app-relatii-internationale',
  templateUrl: './relatii-internationale.component.html',
  styleUrls: ['./relatii-internationale.component.css']
})
export class RelatiiInternationaleComponent {

  prezentare = false;
  proiecte = false;
  bancaMondiala = false;

  changePrezentare() {
    this.prezentare=!this.prezentare;
    this.proiecte=false;
    this.bancaMondiala=false;
  }

  changeProiecte() {
    this.proiecte=!this.proiecte;
    this.bancaMondiala=false;
    this.prezentare=false;
  }

  changeBanca() {
    this.bancaMondiala=!this.bancaMondiala;
    this.proiecte=false;
    this.prezentare=false;
  }

  cuprinsProiecte = [
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_anaf/relatii_internationale/proiecte/fonduri_eu' target='_blank'>I. Fonduri europene preaderare - finalizate</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_anaf/relatii_internationale/proiecte/fonduri_structurale/!ut/p/a0/04_Sj9CPykssy0xPLMnMz0vMAfGjzOI9DD3MPIwsjLz8_T3NDQJNgwIs3L39DS28DfULsh0VAYK_3E4!/' target='_blank'>II. Fonduri structurale</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_anaf/relatii_internationale/proiecte/fonduri_enpi/!ut/p/a1/jZFfb4IwFMU_Cw-80gsLf7K3ujjAERGMEfpiqivIgoW0RZN9-gFzmSbq1qee29-9OecWEZQhwumxKqmqGk7rQRNnE5iBE1ieNYvj0IXEThee_xab3ovdA_klAEECPTAJU9tfAIBz3e8leApJtJxMQzMAPzXP_XDnYPhf_wPgD_9rRK6RGwlG4IHFGSJl3WzHdeWYb5-8EhHBCiaYMDrRl_dKtfJZBx1Op5NBOS0M0egwXHSouGKCM6UDnuPXvrqjkt4atW-kQtnFhN59Tty76d3eO6A13Q2fiZZDENkWGzzqOT0wlP_qqJKKcSZ-KKlEp-T3G8o1q9jRTlHBjPcGtYfVKoMPuz5GRV1tPzHWtC8vcMSP/dl5/d5/L3dHQSEvUUtRZy9nQSEh/' target='_blank'>III. Fonduri ENPI</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_anaf/relatii_internationale/proiecte/fonduri_fse/comunicate_fonduri_fse/!ut/p/a1/jZFfb4IwFMU_iw-80gsLf7K3mjjAERGMUfpiCivIgoW0VZN9-hW2ZZqoW596bn_35pxbRNAWEU5PTU1V03HaDpq4u9AK3dD27XmSRB6kTrb0g9fE8m1bA_klAGEKGphGmRMsAcC97vdTPIM0Xk1nkRVCkFnf_XDnYPhf_wPgD_8bRK6RGwlG4IHFOSJ12xXjunLMiye_RkSwigkmzKPQ5b1SvXw2wIDz-WxSTitTdAYMFwMarpjgTBmAF_hFV0sq6a1R-04qtL2YoN3nxLub3tPeAW1oOXwmWg1BZF_t8KgX9MBQ_qvjRirGmfihpBJHJb_eUD6xq5IeFRXMfOtQf1ivt_DutKe4apviA-PJ5BMFmOsx/dl5/d5/L3dHQSEvUUtRZy9nQSEh/' target='_blank'>IV. Fonduri FSE</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_anaf/relatii_internationale/proiecte/program_hercule/!ut/p/a1/jZFfb4IwFMU_Cw-80osLf7K3mjjAERWNEfpiCivIgoW0VZJ9-hW2ZZqoW596bn_35pxbRFCKCKfnuqKqbjltBk3cfWiHbjjxJ_PlMvIgcdYrP3hd2n7iaCC7BCBMQAPTaO0EKwBwr_v9BM8giTfTWWSHEKzt7364czD8r_8B8If_HSLXyI0EI_DA4hyRqmnzcV0Z5vmTXyEiWMkEE9ZJ6PJBqU4-m2BC3_cW5bS0RGvCcDGh5ooJzpQJeIFfdLWgkt4adWilQunFBO0-I97d9J72DmhHi-Ez0WYIIrtyj0e9oEeGsl8d11IxzsQPJZU4Kfn1hjJjUhb0pKhg1luLuuN2m8K705zjsqnzD4wN4xOjwkGC/dl5/d5/L3dHQSEvUUtRZy9nQSEh/' target='_blank'>V. Fonduri Hercule III 2014 - 2020</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_anaf/relatii_internationale/proiecte/fonduri_eni/!ut/p/a1/jZFRb4IwFIV_iw-8ci8YkOytJg50RgRjhL6YwoqyYCFt1WS_fsBmpom69ann9rs359wChQSoYKdyx3RZC1Z1mrrbwArcwPbsWRhORxg58dLz30LLc4ctkF4DGETYAuNp7PhLRHRv-72ITDCar8aTqRWgH1s__fjgEPxf_xPgD_8boLfInQQ98MTiDOiuqrN-XSkR2dDbAZW84JJL8yjb8l7rRr0YaOD5fDaZYIUpawO7i4Gl0FwKrg0kC_LaVnOm2L1R-1ppSK4mtO5TOnqYftR6R9iwvPtMWHVBVFNsSa8X7MAh_dXzUmkuuLxQSsujVt9vkA7sImdHzSQ332toDut1gh9OdZoXVZl9EjIYfAHd1bvy/dl5/d5/L3dHQSEvUUtRZy9nQSEh/' target='_blank'>VI. Fonduri ENI</a>"
  ];

}
