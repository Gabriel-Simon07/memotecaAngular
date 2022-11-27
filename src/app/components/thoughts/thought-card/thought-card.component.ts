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

  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

}
