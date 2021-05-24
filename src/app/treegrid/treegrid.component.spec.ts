import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreegridComponent } from './treegrid.component';

describe('TreegridComponent', () => {
  let component: TreegridComponent;
  let fixture: ComponentFixture<TreegridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreegridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
