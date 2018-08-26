/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KickstarterComponent } from './kickstarter.component';

describe('KickstarterComponent', () => {
  let component: KickstarterComponent;
  let fixture: ComponentFixture<KickstarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickstarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickstarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
