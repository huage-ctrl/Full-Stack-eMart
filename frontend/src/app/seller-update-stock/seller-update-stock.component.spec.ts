import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdateStockComponent } from './seller-update-stock.component';

describe('SellerUpdateStockComponent', () => {
  let component: SellerUpdateStockComponent;
  let fixture: ComponentFixture<SellerUpdateStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerUpdateStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerUpdateStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
