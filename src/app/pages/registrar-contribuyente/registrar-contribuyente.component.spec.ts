import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarContribuyenteComponent } from './registrar-contribuyente.component';

describe('RegistrarContribuyenteComponent', () => {
  let component: RegistrarContribuyenteComponent;
  let fixture: ComponentFixture<RegistrarContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarContribuyenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
