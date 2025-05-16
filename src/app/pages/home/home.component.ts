import { Component } from '@angular/core';
import { ConhecimentoComponent } from '../../components/aba4-conhecimento/conhecimento.component';
import { ContatosComponent } from '../../components/aba6-contatos/contatos.component';
import { InicioComponent } from '../../components/aba2-inicio/inicio.component';
import { NavegacaoComponent } from '../../components/aba1-navegacao/navegacao.component';
import { ProjetosComponent } from '../../components/aba5-projetos/projetos.component';
import { SobreMimComponent } from '../../components/aba3-sobre-mim/sobre-mim.component';

@Component({
  selector: 'app-home',
  imports: [
    NavegacaoComponent,
    SobreMimComponent,
    ConhecimentoComponent,
    ProjetosComponent,
    ContatosComponent,
    InicioComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
