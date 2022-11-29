import { Component } from '@angular/core';
import { Thought } from '../../thoughts.interface';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.scss']
})
export class ThoughtsListComponent {
  listaPensamento: Thought[] = [
  {
    id: 1,
    conteudo: 'Angular',
    autoria: 'eu',
    modelo: 'modelo3'
  },
  {
    id: 3,
    conteudo: 'Angular 14',
    autoria: 'eu',
    modelo: 'modelo2'
  },
  {
    id: 2,
    conteudo: 'teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres, teste de comprimento de caracteres',
    autoria: 'eu',
    modelo: 'modelo3'
  },
];
}
