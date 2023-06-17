import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsOfTheWeakComponent } from './deals-of-the-weak.component';

describe('DealsOfTheWeakComponent', () => {
  let component: DealsOfTheWeakComponent;
  let fixture: ComponentFixture<DealsOfTheWeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsOfTheWeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsOfTheWeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
