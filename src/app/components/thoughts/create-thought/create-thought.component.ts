import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: 'Learn Angular',
    autoria: 'Dev',
    modelo: true
  };

  constructor(){}

  ngOnInit(): void {

  }
}
