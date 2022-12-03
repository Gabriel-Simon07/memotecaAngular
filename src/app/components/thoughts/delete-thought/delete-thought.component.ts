import { Thought } from './../../thoughts.interface';
import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.scss']
})
export class DeleteThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    autoria: '',
    modelo: '',
    conteudo: '',
  }

  constructor(private thoughtService: ThoughtService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
      this.thoughtService.pegar(Number(id)).subscribe((pensamento: any) => {
        this.thought = pensamento;
      });
  }

  public excluirPensamento() {
    if(this.thought.id) {
      this.thoughtService.excluir(this.thought.id).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }

  public cancelar() {
    this.router.navigate(['/listThought']);
  }
}
