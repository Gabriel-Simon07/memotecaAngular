import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.scss']
})
export class ThoughtsListComponent {
  listaPensamento = [{
    conteudo: 'Angular',
    autoria: 'eu',
    modelo: 'modelo3'
  }];
}
