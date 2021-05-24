import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxdbdemoComponent } from './rxdbdemo.component';

describe('RxdbdemoComponent', () => {
  let component: RxdbdemoComponent;
  let fixture: ComponentFixture<RxdbdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxdbdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxdbdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
