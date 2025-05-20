import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aba0CarregamentoComponent } from './aba0-carregamento.component';

describe('Aba0CarregamentoComponent', () => {
  let component: Aba0CarregamentoComponent;
  let fixture: ComponentFixture<Aba0CarregamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aba0CarregamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aba0CarregamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
