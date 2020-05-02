import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayItemSummaryComponent } from './display-item-summary.component';

describe('DisplayItemSummaryComponent', () => {
  let component: DisplayItemSummaryComponent;
  let fixture: ComponentFixture<DisplayItemSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayItemSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayItemSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
