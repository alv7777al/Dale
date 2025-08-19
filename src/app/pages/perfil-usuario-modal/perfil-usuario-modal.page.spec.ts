import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsuarioModalPage } from './perfil-usuario-modal.page';

describe('PerfilUsuarioModalPage', () => {
  let component: PerfilUsuarioModalPage;
  let fixture: ComponentFixture<PerfilUsuarioModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
