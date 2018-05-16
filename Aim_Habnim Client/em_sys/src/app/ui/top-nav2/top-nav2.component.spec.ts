import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNav2Component } from './top-nav2.component';

describe('TopNav2Component', () => {
  let component: TopNav2Component;
  let fixture: ComponentFixture<TopNav2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNav2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
