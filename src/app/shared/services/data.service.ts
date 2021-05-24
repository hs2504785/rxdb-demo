import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoInterface } from 'projects/rxdb/src/lib/models/todo.interface';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  API_URL = 'https://jsonplaceholder.typicode.com';
  TODOS_URL = `${this.API_URL}/todos`;
  POSTS_URL = `${this.API_URL}/posts`;
  COMMENTS_URL = `${this.API_URL}/comments`;
  ALBUMS_URL = `${this.API_URL}/albums`;
  PHOTOS_URL = `${this.API_URL}/photos`;
  USERS_URL = `${this.API_URL}/users`;
  constructor(private http: HttpClient) {}

  get(url): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(delay(3000));
  }

  getTodos(): Observable<TodoInterface[]> {
    return this.get(this.TODOS_URL);
  }

  getPosts() {
    return this.get(this.POSTS_URL);
  }

  getComments() {
    return this.get(this.COMMENTS_URL);
  }

  getAlbums() {
    return this.get(this.ALBUMS_URL);
  }

  getPhotos() {
    return this.get(this.PHOTOS_URL);
  }

  getPhotosNextBatch(offset, limit = 20) {
    const pageNo = offset / limit;
    return this.get(`${this.PHOTOS_URL}?_page=${pageNo}&_limit=${limit}`);
  }

  getUsers() {
    return this.get(this.USERS_URL);
  }
}
