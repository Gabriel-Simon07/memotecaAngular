import { Component, OnInit } from '@angular/core';
import { Thought } from '../../thoughts.interface';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent implements OnInit {

  pensamento: Thought = {
    id: 1,
    conteudo: 'Learn Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  };

  constructor(){}

  ngOnInit(): void {

  }

  public criarPensamento() {
    console.log("PASSEI AQUI");
  }

  public cancelarPensamento() {
    console.log("CANCELANDO");
  }
}
