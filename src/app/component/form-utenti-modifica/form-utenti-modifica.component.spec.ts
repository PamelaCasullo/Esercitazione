import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUtentiModificaComponent } from './form-utenti-modifica.component';

describe('FormUtentiModificaComponent', () => {
  let component: FormUtentiModificaComponent;
  let fixture: ComponentFixture<FormUtentiModificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUtentiModificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUtentiModificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
