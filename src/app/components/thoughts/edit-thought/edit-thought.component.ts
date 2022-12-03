import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../../thoughts.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.scss']
})
export class EditThoughtComponent implements OnInit {

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

  public editarPensamento() {
    this.thoughtService.editar(this.thought).subscribe(() => {
      this.router.navigate(['/listThought']);
    });
  }
}
