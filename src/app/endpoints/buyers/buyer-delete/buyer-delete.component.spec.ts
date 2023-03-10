import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDeleteComponent } from './buyer-delete.component';

describe('BuyerDeleteComponent', () => {
  let component: BuyerDeleteComponent;
  let fixture: ComponentFixture<BuyerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
