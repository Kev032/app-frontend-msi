import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarExpedienteComponent } from './registrar-expediente.component';

describe('RegistrarExpedienteComponent', () => {
  let component: RegistrarExpedienteComponent;
  let fixture: ComponentFixture<RegistrarExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarExpedienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
