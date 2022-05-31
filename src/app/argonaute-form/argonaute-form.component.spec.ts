import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgonauteFormComponent } from './argonaute-form.component';

describe('ArgonauteFormComponent', () => {
  let component: ArgonauteFormComponent;
  let fixture: ComponentFixture<ArgonauteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgonauteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgonauteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
