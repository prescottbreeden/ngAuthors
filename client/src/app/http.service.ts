import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getAllAuthor() {
    return this._http.get('/authors');
  }

  getAuthor(id) {
    return this._http.get(`/authors/${id}`);
  }

  createAuthor(newAuthor) {
    return this._http.post('/authors/', newAuthor);
  }

  updateAuthor(id: string, editedAuthor) {
    return this._http.put(`/authors/${id}`, editedAuthor);
  }

  completeAuthor(id: string, completedAuthor) {
    return this._http.put(`/authors/${id}`, completedAuthor);
  }

  deleteAuthor(id: string) {
    return this._http.delete(`/authors/` + id);
  }
}
