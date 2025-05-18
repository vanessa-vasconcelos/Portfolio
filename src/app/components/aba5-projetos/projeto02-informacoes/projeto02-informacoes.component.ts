import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projeto02-informacoes',
  imports: [],
  templateUrl: './projeto02-informacoes.component.html',
  styleUrl: './projeto02-informacoes.component.scss'
})
export class Projeto02InformacoesComponent {

   @Output() fechar = new EventEmitter<void>();

  fecharTela(){
    this.fechar.emit()
  }
}
