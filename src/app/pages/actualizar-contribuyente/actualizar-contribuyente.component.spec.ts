import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarContribuyenteComponent } from './actualizar-contribuyente.component';

describe('ActualizarContribuyenteComponent', () => {
  let component: ActualizarContribuyenteComponent;
  let fixture: ComponentFixture<ActualizarContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarContribuyenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
