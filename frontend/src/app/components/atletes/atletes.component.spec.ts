import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletesComponent } from './atletes.component';

describe('AtletesComponent', () => {
  let component: AtletesComponent;
  let fixture: ComponentFixture<AtletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
