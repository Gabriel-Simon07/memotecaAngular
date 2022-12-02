import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from '../../thoughts.interface';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent implements OnInit {

  pensamento: Thought = {
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(private router: Router, private thoughtService: ThoughtService){}

  ngOnInit(): void {

  }

  public criarPensamento() {
    this.thoughtService.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }
}
