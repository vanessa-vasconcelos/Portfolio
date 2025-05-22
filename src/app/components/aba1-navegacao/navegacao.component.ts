import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  imports: [NgIf, CommonModule],
  templateUrl: './navegacao.component.html',
  styleUrl: './navegacao.component.scss',
})
export class NavegacaoComponent implements OnInit {
  lightMode = false;
  menuAberto = false;
  // lightModeMenu = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'Dark' || savedTheme === 'Light') {
      this.aplicaTema(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.aplicaTema(prefersDark ? 'Dark' : 'Light');
    }
  }

  alteraLightMode() {
    const newTheme = this.lightMode ? 'Light' : 'Dark';
    this.aplicaTema(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  private aplicaTema(theme: string) {
    this.lightMode = theme === 'Dark';
    document.documentElement.setAttribute('data-theme', theme);
  }

  alteraLightModeMenu() {
    this.lightMode = !this.lightMode;
  }
}
