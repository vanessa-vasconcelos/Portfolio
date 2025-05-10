import { Component, ViewEncapsulation } from '@angular/core';
import { NavegacaoComponent } from '../../components/navegacao/navegacao.component';
import { ConhecimentoComponent } from '../../components/conhecimento/conhecimento.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';

@Component({
  selector: 'app-home',
  imports: [NavegacaoComponent, ConhecimentoComponent, ProjetosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
