import { Component } from '@angular/core';

@Component({
  selector: 'app-emcs',
  templateUrl: './emcs.component.html',
  styleUrls: ['./emcs.component.css']
})
export class EmcsComponent {

  elemente = [
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_ue/emcs/prima_pagina/!ut/p/a1/hY_LDoIwEEW_xQVbOqBF4g4XUtCER2LEbkxJeBlsSanw-1bDQhPF2c3knNy5iKIMUc6GpmKqEZy1z506F2IRh9iuHUZRsIYEp7Hr7yMLdlgDZw3Aj_Hg0weSgPa3QYr9GMBfTf4M8Cf_hOhsBDgTMPNiiGjVivxV9-zxfOlWiMqiLGQhzbvU51qprt8YYMA4jibjrDSlMOAbX4teoewNQ93tmMEVt8PBWzwAt_wvkw!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/' target='_blank'>1. Prima pagină</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_ue/emcs/descriere/ce_este_emcs/!ut/p/a1/hY_LDoIwEEW_xQVbOqAgcYebFjThkRihG1MSXgZbUir8vtWw0ERxdjM5J3cuoihDlLOxrZlqBWfdc6fuhVjEJbZnh1EUbCFx0tjDh8jCYGsg1wD8GB8-fSAJaH8fpA6OAfBm9heAP_lnRBcjwJ2BhRdDROtOFK-6uc-LtVcjKsuqlKU071KfG6X6YWeAAdM0mYyzypTCgG98IwaFsjcM9bdTBlenG4_-6gEtFt5M/dl5/d5/L2dBISEvZ0FBIS9nQSEh/' target='_blank'>2. Descriere EMCS</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_ue/emcs/functionalitate/ce_reprezinta_fess/!ut/p/a1/hY_LDoIwEEW_xQVbOqBU4g5dtKAJj8SI3ZiS8DJISanw-1bDQhPF2c3knNy5iKEUsZYPdclVLVrePHeGL9SimNquHYShv4bYSSKX7EOL7LAGzhqAH-PBpw80Bu1v_cQhEQBZTf4M8Cf_hNhsBOAJmHkxQKxsRPaqe_babOmWiMm8yGUuzbvU50qprt8YYMA4jiZveWFKYcA3vhK9QukbhrrbMYWr0wwHb_EAHjOtCA!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/' target='_blank'>3. Funcționalitate</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_ue/emcs/prototip/!ut/p/a1/hY_LDoIwEEW_xQVbOoggcYebFjThkRihG1MSXgZbUir8vtWw0ERxdjM5J3cuoihDlLOxrZlqBWfdc6fuhVjEJWtvHUZRsIXESWMPHyILB7YGcg3Aj_Hh0weSgPb3QergGABvZn8B-JN_RnQxAtwZWHgxRLTuRPGqm_u8sL0aUVlWpSyleZf63CjVDzsDDJimyWScVaYUBnzjGzEolL1hqL-dMrg63Xj0Vw8TZa9m/dl5/d5/L2dBISEvZ0FBIS9nQSEh/' target='_blank'>4. Prototip EMCS</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_ue/emcs/glosar/!ut/p/a1/hY_LDoIwEEW_xQVbOqg84g43LWjCIzFCN6YkvAy2pFT4fathoYni7GZyTu5cRFGGKGdjWzPVCs66506dC7GIQ9beOoyiwIXETmMPHyIL-64Gcg3Aj_Hh0weSgPb3QWrjGABvZ38B-JN_RnQxApwZWHgxRLTuRPGqm_u82Hg1orKsSllK8y71uVGqH3YGGDBNk8k4q0wpDPjGN2JQKHvDUH87ZXC1u_Horx6di2fP/dl5/d5/L2dBISEvZ0FBIS9nQSEh/' target='_blank'>5. Glosar</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_ue/emcs/noutati/!ut/p/a1/hY_LDoIwEEW_xQVbOqBU4g43LWjCIzFCN6YkvAxSUir8vtWw0ERxdjM5J3cuYihFrONjU3HViI63z53hC7UoprZrB2HobyF2ksglh9AiGDSQaQB-jAefPtAYtL_3E4dEAGQz-wvAn_wzYosRgGdg4cUAsaoV-atu5nX52q0Qk0VZyEKad6nPtVL9sDPAgGmaTN7x0pTCgG98LQaF0jcM9bdTClenHY_e6gHkIy3l/dl5/d5/L2dBISEvZ0FBIS9nQSEh/' target='_blank'>6. Noutăți</a>",
    "<a href='https://www.anaf.ro/anaf/internet/ANAF/info_ue/emcs/contact_emcs/!ut/p/a1/hY_LDoIwEEW_xQVbOqBU4g43LajhkRixG1MSXgYpKRV-32pYaKI4u5mckzsXMZQi1vKhLrmqRcub587whVoUU9u1gzD01xA7SeSSXWiRA9bAWQPwYzz49IHGoP2tnzgkAiCryZ8B_uSfEJuNADwBMy8GiJWNyF51z16bLd0SMZkXucyleZf6XCnV9RsDDBjH0eQtL0wpDPjGV6JXKH3DUHc7pnB1mmHvLR539FqW/dl5/d5/L2dBISEvZ0FBIS9nQSEh/' target='_blank'>7. Contact EMCS</a>"
  ];

}
