import { Component } from '@angular/core';

@Component({
  selector: 'app-context-fiscal',
  templateUrl: './context-fiscal.component.html',
  styleUrls: ['./context-fiscal.component.css']
})
export class ContextFiscalComponent {

  enumeratii = [
  'Impozitul pe profit',
  'Impozitul pe venitul microîntreprinderilor',
  'Impozitul pe venit',
  'Contribuțiile sociale obligatorii',
  'Impozitul pe veniturile obținute din România de nerezidenți și impozitul pe reprezentanțele firmelor stăine înființate in România',
  'Taxa pe Valoare Adăugată (TVA)',
  'Accize și alte taxe speciale',
  'Impozite și taxe locale',
  'Impozitul pe construcții'];
  
}
