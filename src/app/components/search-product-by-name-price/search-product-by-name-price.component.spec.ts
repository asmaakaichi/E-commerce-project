import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductByNamePriceComponent } from './search-product-by-name-price.component';

describe('SearchProductByNamePriceComponent', () => {
  let component: SearchProductByNamePriceComponent;
  let fixture: ComponentFixture<SearchProductByNamePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductByNamePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductByNamePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
