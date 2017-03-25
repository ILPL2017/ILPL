/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IlplFixtureComponent } from './ilpl-fixture.component';

describe('IlplFixtureComponent', () => {
  let component: IlplFixtureComponent;
  let fixture: ComponentFixture<IlplFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlplFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlplFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
