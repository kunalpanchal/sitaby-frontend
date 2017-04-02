/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutgrowComponent } from './outgrow.component';

describe('OutgrowComponent', () => {
  let component: OutgrowComponent;
  let fixture: ComponentFixture<OutgrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
