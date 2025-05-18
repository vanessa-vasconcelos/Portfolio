import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto01InformacoesComponent } from './projeto01-informacoes.component';

describe('Projeto01InformacoesComponent', () => {
  let component: Projeto01InformacoesComponent;
  let fixture: ComponentFixture<Projeto01InformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projeto01InformacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projeto01InformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
