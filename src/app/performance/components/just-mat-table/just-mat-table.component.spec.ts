import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { JustMatTableComponent } from './just-mat-table.component';

describe('JustMatTableComponent', () => {
  let component: JustMatTableComponent;
  let fixture: ComponentFixture<JustMatTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JustMatTableComponent],
        imports: [
          NoopAnimationsModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(JustMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
