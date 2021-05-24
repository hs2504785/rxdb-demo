import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  distinctUntilChanged,
  mergeMap,
  scan,
  tap,
  throttleTime,
} from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  photos$: Observable<any[]>;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  batch = 20;
  theEnd = false;
  isLoading = false;

  offset = new BehaviorSubject(null);

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.photos$ = this.offset.pipe(
      tap(() => (this.isLoading = true)),
      throttleTime(500),
      distinctUntilChanged(),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch: any) => {
        return [...acc, ...batch];
      }, []),
    );
  }

  getBatch(offset) {
    return this.dataService.getPhotosNextBatch(offset).pipe(
      tap((arr: any) => {
        this.isLoading = false;
        if (arr.length < 20) {
          this.theEnd = true;
        }
      }),
    );
  }

  nextBatch(e, offset) {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`At ${e} End is ${end}, '>=Total', ${total} offset ${offset}`);
    if (total === end) {
      this.offset.next(offset);
    }
  }

  trackByIdx(i) {
    return i;
  }
}
