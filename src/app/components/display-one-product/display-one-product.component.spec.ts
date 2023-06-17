import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneProductComponent } from './display-one-product.component';

describe('DisplayOneProductComponent', () => {
  let component: DisplayOneProductComponent;
  let fixture: ComponentFixture<DisplayOneProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOneProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
