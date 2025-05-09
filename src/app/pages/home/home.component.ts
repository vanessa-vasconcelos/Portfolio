import { Component } from '@angular/core';
import { NavegacaoComponent } from '../../components/navegacao/navegacao.component';

@Component({
  selector: 'app-home',
  imports: [NavegacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
