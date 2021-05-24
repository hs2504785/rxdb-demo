import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PostListItem {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PostListItem[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    position: 11,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 12,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
  {
    position: 13,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 14,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];

/**
 * Data source for the PostList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PostListDataSource extends DataSource<PostListItem> {
  data: PostListItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PostListItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange,
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }),
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.',
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PostListItem[]): PostListItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PostListItem[]): PostListItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'position':
          return compare(+a.position, +b.position, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean,
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
