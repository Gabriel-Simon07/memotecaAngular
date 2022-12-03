import { Thought } from './../thoughts.interface';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Thought[]>(this.API);
  }

  criar(thought: Thought) {
    return this.http.post<Thought>(this.API, thought);
  }

  excluir(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  pegar(id: number) {
    return this.http.get(`${this.API}/${id}`);
  }

  editar(thought: Thought) {
    return this.http.put(`${this.API}/${thought.id}`, thought);
  }
}
