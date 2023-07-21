import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUserModel } from './add-user-model';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(
    private httpClient: HttpClient
  ) { }
  httpOptions : any
  url = 'https://jsonplaceholder.typicode.com/users'

  addUser(data: AddUserModel) {
    const add = {
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.address,
        suite: '-',
        city: '-',
        zipcode: '-',
        geo: {
          lat: -43.9509,
          lng: -34.4618
        }
      },
      phone: data.phone,
      website: data.website,
      company: {
        name: data.company,
        catchPhrase: '-',
        bs: '-'
      }
    }
    return this.httpClient.post(this.url , add);
  }
}
