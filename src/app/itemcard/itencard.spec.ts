import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itencard } from './itencard';

describe('Itencard', () => {
  let component: Itencard;
  let fixture: ComponentFixture<Itencard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Itencard],
    }).compileComponents();

    fixture = TestBed.createComponent(Itencard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
