import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

const EXAMPLE_DATA: any[] = [
  {
    weight: 1.0079,
    symbol: 'H',
  },
  {
    weight: 4.0026,
    symbol: 'He',
  },
  {
    weight: 6.941,
    symbol: 'Li',
  },
  {
    weight: 9.0122,
    symbol: 'Be',
  },
  {
    weight: 10.811,
    symbol: 'B',
  },
  {
    weight: 12.0107,
    symbol: 'C',
  },
];

@Component({
  selector: 'app-ngfor-track-by',
  templateUrl: './ngfor-track-by.component.html',
  styleUrls: ['./ngfor-track-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgforTrackByComponent implements OnInit {
  records = [];
  constructor() {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.records = EXAMPLE_DATA;
  }

  updateList() {
    this.records = [
      {
        weight: 1.0079,
        symbol: 'Heloo',
      },
      {
        weight: 1.0079,
        symbol: 'Hemant',
      },
      {
        weight: 1.0079,
        symbol: 'H',
      },
      {
        weight: 4.0026,
        symbol: 'He',
      },
      {
        weight: 6.941,
        symbol: 'Li',
      },
      {
        weight: 9.0122,
        symbol: 'Be',
      },
      {
        weight: 10.811,
        symbol: 'B',
      },
      {
        weight: 12.0107,
        symbol: 'C',
      },
    ];
  }

  resetList() {
    this.records = EXAMPLE_DATA;
  }

  symbolTrackBy(index, item) {
    console.log(item);
    return item.symbol;
  }
}
