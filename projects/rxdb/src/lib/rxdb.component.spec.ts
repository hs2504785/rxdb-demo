import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxdbComponent } from './rxdb.component';

describe('RxdbComponent', () => {
  let component: RxdbComponent;
  let fixture: ComponentFixture<RxdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
