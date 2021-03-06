import { ComponentFixture, TestBed } from '@angular/core/testing';

import {EditLableComponent } from './label.component';

describe('LabelComponent', () => {
  let component: EditLableComponent;
  let fixture: ComponentFixture<EditLableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
