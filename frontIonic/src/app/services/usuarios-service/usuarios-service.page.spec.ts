import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosServicePage } from './usuarios-service.page';

describe('UsuariosServicePage', () => {
  let component: UsuariosServicePage;
  let fixture: ComponentFixture<UsuariosServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuariosServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
