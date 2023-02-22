import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDeleteComponent } from './district-delete.component';

describe('DistrictDeleteComponent', () => {
  let component: DistrictDeleteComponent;
  let fixture: ComponentFixture<DistrictDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
