import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(
    private httpClient: HttpClient
  ) { }
  httpOptions : any
  url = 'https://jsonplaceholder.typicode.com/users'

  getDataUsers() {
    return this.httpClient.get(this.url, this.httpOptions)
  }

  addUser(data: any) {
    return this.httpClient.post(this.url , data);
  }

  updateUser(id: number, data: any) {
    return this.httpClient.put(`${this.url}/${id}`, data);
  }


  deleteUser(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
