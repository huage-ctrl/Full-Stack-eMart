import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSellingListComponent } from './seller-selling-list.component';

describe('SellerSellingListComponent', () => {
  let component: SellerSellingListComponent;
  let fixture: ComponentFixture<SellerSellingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerSellingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSellingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
