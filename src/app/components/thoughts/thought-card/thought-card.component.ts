import { Thought } from './../../thoughts.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrls: ['./thought-card.component.scss']
})
export class ThoughtCardComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor() {}

  @Input() pensamento: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };


  public larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
