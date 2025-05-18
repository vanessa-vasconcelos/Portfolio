import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projeto01-informacoes',
  imports: [],
  templateUrl: './projeto01-informacoes.component.html',
  styleUrl: './projeto01-informacoes.component.scss'
})
export class Projeto01InformacoesComponent {

  @Output() fechar = new EventEmitter<void>();

  fecharTela(){
    this.fechar.emit()
  }
}
