/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfymakerComponent } from './infymaker.component';

describe('InfymakerComponent', () => {
  let component: InfymakerComponent;
  let fixture: ComponentFixture<InfymakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfymakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfymakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
