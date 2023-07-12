import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateHeaderComponent } from './exchange-rate-header.component';

describe('ExchangeRateHeaderComponent', () => {
  let component: ExchangeRateHeaderComponent;
  let fixture: ComponentFixture<ExchangeRateHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeRateHeaderComponent]
    });
    fixture = TestBed.createComponent(ExchangeRateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
