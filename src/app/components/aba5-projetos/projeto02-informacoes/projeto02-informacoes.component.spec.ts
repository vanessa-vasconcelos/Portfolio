import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto02InformacoesComponent } from './projeto02-informacoes.component';

describe('Projeto02InformacoesComponent', () => {
  let component: Projeto02InformacoesComponent;
  let fixture: ComponentFixture<Projeto02InformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projeto02InformacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projeto02InformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
