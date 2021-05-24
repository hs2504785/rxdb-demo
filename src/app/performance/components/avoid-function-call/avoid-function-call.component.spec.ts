import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvoidFunctionCallComponent } from './avoid-function-call.component';

describe('AvoidFunctionCallComponent', () => {
  let component: AvoidFunctionCallComponent;
  let fixture: ComponentFixture<AvoidFunctionCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvoidFunctionCallComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvoidFunctionCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
