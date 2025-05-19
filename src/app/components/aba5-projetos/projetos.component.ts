import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Projeto01InformacoesComponent } from './projeto01-informacoes/projeto01-informacoes.component';
import { Projeto02InformacoesComponent } from "./projeto02-informacoes/projeto02-informacoes.component";

@Component({
  selector: 'app-projetos',
  imports: [MatIconModule, CommonModule, Projeto01InformacoesComponent, Projeto02InformacoesComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  projetoEscolhido: number | null = null;

  exibirProjeto(numero: number) {
    this.projetoEscolhido = numero;
  }

  fecharInformacoes(){
    this.projetoEscolhido = null;
  }
}
