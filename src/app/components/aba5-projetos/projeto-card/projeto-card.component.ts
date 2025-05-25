import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projeto-card',
  imports: [CommonModule, MatIcon],
  templateUrl: './projeto-card.component.html',
  styleUrl: './projeto-card.component.scss',
})
export class ProjetoCardComponent {
  @Input() imagem!: string;
  @Input() titulo!: string;
  @Input() data!: string;
  @Input() tecnologias!: string[];
  @Input() projetoId!: number;
  @Input() onClick!: (id: number) => void;

  @Output() selecionar = new EventEmitter<number>();

  emitirClique() {
    this.selecionar.emit(this.projetoId);
  }
}
