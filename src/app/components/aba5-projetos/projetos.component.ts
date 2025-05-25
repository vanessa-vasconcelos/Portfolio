import { Component } from '@angular/core';
import { ProjetoCardComponent } from './projeto-card/projeto-card.component';
import { ProjetoModalComponent } from './projeto-modal/projeto-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  imports: [CommonModule, ProjetoCardComponent, ProjetoModalComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  projetos = [
    {
      id: 1,
      titulo: 'Página de Login',
      imagem: 'assets/imgs/login-modificado.jpg',
      data: '07 Maio de 2025',
      descricao: `Esse projeto foi uma ótima oportunidade para aprender, na prática, como funciona o fluxo completo de autenticação. Desenvolvi uma aplicação com cadastro e login de usuários usando Angular no front e integração com backend em Java com Spring Boot. Implementei rotas protegidas, autenticação com JWT, formulários reativos e toda a lógica de verificação de credenciais.`,
      tecnologias: ['angular-icon', 'java-icon', 'sass-icon', 'html5-icon'],
      repoUrl: 'https://github.com/vanessa-vasconcelos/login-page',
      linkedinUrl:
        'https://www.linkedin.com/feed/update/urn:li:activity:7328407120951853057/',
    },
    {
      id: 2,
      titulo: 'Cardápio',
      imagem: 'assets/imgs/cardapio-min.jpg',
      data: '27 de Abril de 2025',
      descricao: `Esse foi um projeto fullstack que desenvolvi com base em um tutorial da Fernanda Kipper. A ideia era treinar a integração entre front-end e back-end usando tecnologias modernas. Com ele, é possível visualizar os pratos disponíveis e cadastrar novos via formulário. Utilizei React com TypeScript no front e Spring Boot com Java no back, além de React Query e uma API RESTful simples com Spring Web e JPA.`,
      tecnologias: ['typescript-icon', 'java-icon', 'spring-icon', 'sass-icon'],
      repoUrl: 'https://github.com/vanessa-vasconcelos/cardapio.git',
      linkedinUrl:
        'https://www.linkedin.com/feed/update/urn:li:activity:7328867193641684992/',
    },
  ];

  projetoSelecionado: any = null;

  exibirProjeto(projeto: any) {
    this.projetoSelecionado = projeto;
    document.body.classList.add('modal-open');
  }

  fecharInformacoes() {
    this.projetoSelecionado = null;
    document.body.classList.remove('modal-open');
    history.replaceState(null, '', location.pathname);
  }
}
