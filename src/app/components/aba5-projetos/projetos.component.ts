import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Projeto01InformacoesComponent } from './projeto01-informacoes/projeto01-informacoes.component';

@Component({
  selector: 'app-projetos',
  imports: [MatIconModule, CommonModule, Projeto01InformacoesComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  mostrarDetalhes: boolean = false;

  exibir() {
    this.mostrarDetalhes = true;
  }
}
