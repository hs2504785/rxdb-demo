import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforTrackByComponent } from './ngfor-track-by.component';

describe('NgforTrackByComponent', () => {
  let component: NgforTrackByComponent;
  let fixture: ComponentFixture<NgforTrackByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgforTrackByComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
