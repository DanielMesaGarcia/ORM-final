import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesServicePage } from './detalles-service.page';

describe('DetallesServicePage', () => {
  let component: DetallesServicePage;
  let fixture: ComponentFixture<DetallesServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
