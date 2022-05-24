import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InQueueComponent } from './in-queue.component';

describe('InQueueComponent', () => {
  let component: InQueueComponent;
  let fixture: ComponentFixture<InQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
