import { Component, OnInit } from '@angular/core';
import { IntersectionStatus } from 'src/app/shared/directives/from-intersection-observer';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  list = [];
  visibilityStatus: { [key: number]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  ngOnInit() {
    const data = [];
    for (let n = 0; n < 1000; n++) {
      data.push(n);
    }
    this.list = data;
  }

  onVisibilityChanged(index: number, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }

  trackByIndex(index: number) {
    return index;
  }
}
