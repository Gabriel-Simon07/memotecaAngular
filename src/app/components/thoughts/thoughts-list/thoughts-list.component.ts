import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.scss']
})
export class ThoughtsListComponent {
  listaPensamento = [
  {
    conteudo: 'Angular',
    autoria: 'eu',
    modelo: 'modelo3'
  },
  {
    conteudo: 'Angular 14',
    autoria: 'eu',
    modelo: 'modelo2'
  },
  {
    conteudo: 'teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres',
    autoria: 'eu',
    modelo: 'modelo3'
  },
];
}
