import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-projeto-modal',
  templateUrl: './projeto-modal.component.html',
  styleUrls: ['./projeto-modal.component.scss'],
})
export class ProjetoModalComponent {
  @Input() imagem!: string;
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() data!: string;
  @Input() repoUrl!: string;
  @Input() linkedinUrl!: string;

  @Output() fechar = new EventEmitter<void>();

  constructor(private readonly el: ElementRef) {
    history.pushState(null, '', location.href); // adiciona entrada no histórico
  }

  @HostListener('window:keydown.esc')
  handleEsc() {
    this.fechar.emit();
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    const modalContent =
      this.el.nativeElement.querySelector('.container-infos');
    if (modalContent && !modalContent.contains(event.target)) {
      this.fechar.emit();
    }
  }

  @HostListener('window:popstate')
  onBackButton() {
    this.fechar.emit();
  }

  fecharTela() {
    this.fechar.emit();
  }
}
