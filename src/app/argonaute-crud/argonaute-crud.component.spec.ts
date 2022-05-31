import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgonauteCrudComponent } from './argonaute-crud.component';

describe('ArgonauteCrudComponent', () => {
  let component: ArgonauteCrudComponent;
  let fixture: ComponentFixture<ArgonauteCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgonauteCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgonauteCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
