import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayItemCompleteComponent } from './display-item-complete.component';

describe('DisplayItemCompleteComponent', () => {
  let component: DisplayItemCompleteComponent;
  let fixture: ComponentFixture<DisplayItemCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayItemCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayItemCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
