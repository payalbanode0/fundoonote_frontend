import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltrashnoteComponent } from './getalltrashnote.component';

describe('GetalltrashnoteComponent', () => {
  let component: GetalltrashnoteComponent;
  let fixture: ComponentFixture<GetalltrashnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalltrashnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalltrashnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
