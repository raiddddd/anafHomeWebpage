import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sectiuni-principale',
  templateUrl: './sectiuni-principale.component.html',
  styleUrls: ['./sectiuni-principale.component.css']
})
export class SectiuniPrincipaleComponent {

  @Input() text='';
  @Input() textBtn='';
  @Input() ImgSrc='';
  @Input() route='';
}
