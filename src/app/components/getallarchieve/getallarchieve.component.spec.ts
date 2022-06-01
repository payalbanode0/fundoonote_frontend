import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallarchieveComponent } from './getallarchieve.component';

describe('GetallarchieveComponent', () => {
  let component: GetallarchieveComponent;
  let fixture: ComponentFixture<GetallarchieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallarchieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallarchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
