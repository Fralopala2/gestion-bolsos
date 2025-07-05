import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsoForm } from './bolso-form';

describe('BolsoForm', () => {
  let component: BolsoForm;
  let fixture: ComponentFixture<BolsoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolsoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
