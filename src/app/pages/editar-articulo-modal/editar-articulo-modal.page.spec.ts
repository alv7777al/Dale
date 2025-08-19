import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarArticuloModalPage } from './editar-articulo-modal.page';

describe('EditarArticuloModalPage', () => {
  let component: EditarArticuloModalPage;
  let fixture: ComponentFixture<EditarArticuloModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarArticuloModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
