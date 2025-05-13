import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-conhecimento',
  imports: [MatIconModule],
  templateUrl: './conhecimento.component.html',
  styleUrl: './conhecimento.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ConhecimentoComponent {}
