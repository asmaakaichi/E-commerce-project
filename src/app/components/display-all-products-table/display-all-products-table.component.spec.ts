import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllProductsTableComponent } from './display-all-products-table.component';

describe('DisplayAllProductsTableComponent', () => {
  let component: DisplayAllProductsTableComponent;
  let fixture: ComponentFixture<DisplayAllProductsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllProductsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
