import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DireccionessServicePage } from './direccioness-service.page';

describe('DireccionessServicePage', () => {
  let component: DireccionessServicePage;
  let fixture: ComponentFixture<DireccionessServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DireccionessServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
