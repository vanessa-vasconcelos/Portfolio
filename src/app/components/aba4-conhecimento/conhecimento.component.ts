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
  descricaoLinguagem: string | null = null;

  conhecimentos = [
    {
      icone: 'html5-icon',
      descricao: 'HTML é a linguagem de marcação padrão para criar e estruturar o conteúdo de páginas web. Serve para definir a estrutura e o significado do conteúdo, como parágrafos, títulos, listas, imagens e links.'
    },
    {
      icone: 'css3-icon',
      descricao: 'CSS é uma linguagem de estilização utilizada para controlar a apresentação visual de páginas web, como a cor do texto, fontes, espaçamento e layout.'
    },
    {
      icone: 'sass-icon',
      descricao: 'SASS é uma linguagem de extensão para CSS que oferece recursos adicionais para facilitar a escrita e organização de estilos em páginas web.'
    },
    {
      icone: 'javascript-icon',
      descricao: 'JavaScript é uma linguagem de programação amplamente utilizada para adicionar interatividade a páginas da web.'
    },
    {
      icone: 'typescript-icon',
      descricao: 'TypeScript é um superconjunto de JavaScript que adiciona digitação estática opcional e recursos avançados ao JavaScript.'
    },
    {
      icone: 'angular-icon',
      descricao: 'Angular é um framework de desenvolvimento front-end open-source baseado em TypeScript, uma linguagem de programação que estende o JavaScript.'
    },
    {
      icone: 'java-icon',
      descricao: 'Java é uma linguagem de programação orientada a objetos, multiplataforma, muito utilizada para criar diversos tipos de aplicações...'
    },
    {
      icone: 'spring-icon',
      descricao: 'O Spring torna a programação em Java mais rápida, fácil e segura para todos. É o framework Java mais popular do mundo.'
    },
    {
      icone: 'python-icon',
      descricao: 'Python é uma linguagem de programação de alto nível, interpretada, orientada a objetos e de tipagem dinâmica.'
    },
    {
      icone: 'numpy-icon',
      descricao: 'NumPy é uma biblioteca Python que realiza o processamento de matrizes n-dimensionais e computação numérica.'
    },
    {
      icone: 'pandas-icon',
      descricao: 'Pandas é uma biblioteca Python usada para manipulação e análise de dados.'
    },
    {
      icone: 'git-icon',
      descricao: 'Git é um sistema de controle de versão distribuído utilizado para rastrear e gerenciar as alterações em projetos.'
    }
  ];

  mostrarDescricao(texto: string) {
    this.descricaoLinguagem = this.descricaoLinguagem === texto ? null : texto;
  }
}
