import { Component, ViewEncapsulation } from '@angular/core';
import { NavegacaoComponent } from '../../components/navegacao/navegacao.component';
import { ConhecimentoComponent } from '../../components/conhecimento/conhecimento.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { ContatosComponent } from '../../components/contatos/contatos.component';
import { SobreMimComponent } from '../../components/sobre-mim/sobre-mim.component';
import { InicioComponent } from '../../components/inicio/inicio.component';

@Component({
  selector: 'app-home',
  imports: [NavegacaoComponent,SobreMimComponent, ConhecimentoComponent, ProjetosComponent, ContatosComponent, InicioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
