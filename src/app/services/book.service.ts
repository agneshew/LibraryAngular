import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://localhost:8080/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get(baseUrl);
  }
  getBookById(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addBook(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateBook(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteBook(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }


}
