import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlistComponent } from './monthlist.component';

describe('MonthlistComponent', () => {
  let component: MonthlistComponent;
  let fixture: ComponentFixture<MonthlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
