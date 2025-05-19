import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-conhecimento',
  imports: [MatIconModule, CommonModule],
  templateUrl: './conhecimento.component.html',
  styleUrl: './conhecimento.component.scss',
})
export class ConhecimentoComponent {
  descricaoLinguagem: string = ''

  mostrarDescricao(texto: string){
    this.descricaoLinguagem = texto
  }

  sumirDescricao(){
    this.descricaoLinguagem = ''
  }
}
