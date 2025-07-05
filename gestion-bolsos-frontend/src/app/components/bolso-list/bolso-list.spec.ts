import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsoList } from './bolso-list';

describe('BolsoList', () => {
  let component: BolsoList;
  let fixture: ComponentFixture<BolsoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolsoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
