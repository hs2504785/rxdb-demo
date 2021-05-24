import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbsamplesComponent } from './dbsamples.component';

describe('DbsamplesComponent', () => {
  let component: DbsamplesComponent;
  let fixture: ComponentFixture<DbsamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbsamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbsamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
