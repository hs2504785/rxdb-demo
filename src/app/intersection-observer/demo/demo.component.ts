import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IntersectionStatus } from 'src/app/shared/directives/from-intersection-observer';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  visibilityStatus: { [key: string]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  todos$: Observable<any[]>;
  posts$: Observable<any[]>;
  comments$: Observable<any[]>;
  albums$: Observable<any[]>;
  photos$: Observable<any[]>;
  users$: Observable<any[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos$ = this.dataService.getTodos();
    this.posts$ = this.dataService.getPosts();
    this.comments$ = this.dataService.getComments();
    this.albums$ = this.dataService.getAlbums();
    this.photos$ = this.dataService.getPhotos();
    this.users$ = this.dataService.getUsers();
  }

  onVisibilityChanged(index: string, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }
}
