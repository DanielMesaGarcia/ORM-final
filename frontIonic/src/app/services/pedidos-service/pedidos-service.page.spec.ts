import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosServicePage } from './pedidos-service.page';

describe('PedidosServicePage', () => {
  let component: PedidosServicePage;
  let fixture: ComponentFixture<PedidosServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidosServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
