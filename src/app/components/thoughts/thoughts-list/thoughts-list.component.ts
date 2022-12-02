import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../../thoughts.interface';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrls: ['./thoughts-list.component.scss']
})
export class ThoughtsListComponent implements OnInit{
  listaPensamento: Thought[] = [];

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {
    this.thoughtService.listar().subscribe((listThoughts) => {
      this.listaPensamento = listThoughts;
    });
  }
}
