/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IlplResultsComponent } from './ilpl-results.component';

describe('IlplResultsComponent', () => {
  let component: IlplResultsComponent;
  let fixture: ComponentFixture<IlplResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlplResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlplResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
