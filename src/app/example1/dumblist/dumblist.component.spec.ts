import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumblistComponent } from './dumblist.component';

describe('DumblistComponent', () => {
  let component: DumblistComponent;
  let fixture: ComponentFixture<DumblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
