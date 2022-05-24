import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedComponent } from './prepared.component';

describe('PreparedComponent', () => {
  let component: PreparedComponent;
  let fixture: ComponentFixture<PreparedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
