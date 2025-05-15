import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projetos',
  imports: [MatIconModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjetosComponent {}
