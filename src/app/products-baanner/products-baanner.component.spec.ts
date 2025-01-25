import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBaannerComponent } from './products-baanner.component';

describe('ProductsBaannerComponent', () => {
  let component: ProductsBaannerComponent;
  let fixture: ComponentFixture<ProductsBaannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsBaannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBaannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
